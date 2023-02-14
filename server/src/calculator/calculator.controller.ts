import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ExpressionDto } from './dto/expression.dto';
import { CacheService } from '../cache';
import { CACHE_SERVICE } from '../cache';
import { HistoryService } from '../history/history.service';
import { HISTORY_SERVICE } from '../history';
import { CalculationResultDto } from './dto/calculation-result.dto';

@Controller('/calculator')
export class CalculatorController {
  constructor(
    @Inject(HISTORY_SERVICE)
    private historyService: HistoryService,
    @Inject(CACHE_SERVICE)
    private readonly cacheService: CacheService,
  ) {}
  @Get()
  getResult(
    @Query() expressionDto: ExpressionDto,
  ): Promise<CalculationResultDto> {
    const { expression } = expressionDto;
    const response = this.cacheService
      .checkInCache(expression)
      .then((result) => {
        const dto = { result: `${result}`, expression };
        const historyItem = this.historyService.create(dto);
        return historyItem;
      });
    return response;
  }
}
