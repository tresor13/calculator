import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ExpressionDto } from './dto/expression.dto';
import { CacheService } from '../cache';
import { CACHE_SERVICE } from '../cache';
import { DefaultHistoryService } from '../history/services/history.service';
import { HISTORY_SERVICE } from '../history';
import { CALCULATOR_SERVICE } from './constants';
import { ClientResponseDto } from './dto/client.response.dto.ts';
import { ICalculatorService } from './interfaces/calculator.services.interfaces';
import { ICacheService } from 'src/cache/interface';
import { IHistoryService } from 'src/history/interfaces/interface';

@Controller('/calculator')
export class CalculatorController {
  constructor(
    @Inject(HISTORY_SERVICE)
    private historyService: IHistoryService,
    @Inject(CACHE_SERVICE)
    private readonly cacheService: ICacheService,
    @Inject(CALCULATOR_SERVICE)
    private readonly calculatorService: ICalculatorService,
  ) {}
  @Get()
  getResult(@Query() expressionDto: ExpressionDto): Promise<ClientResponseDto> {
    const expression: string = expressionDto.expression;
    const response: Promise<ClientResponseDto> = this.cacheService
      .checkInCache(expression)
      .then((response) => {
        if (!response) {
          const calculationResult =
            this.calculatorService.getResult(expression);
          const clientDto = this.historyService
            .create({
              expression,
              result: calculationResult,
            })
            .then((dbResponse) => {
              return this.cacheService.setToCache(dbResponse);
            });
          return clientDto;
        }
        return this.historyService.create({ expression, result: response });
      });
    return response;
  }
}
