import { Controller, Get, Query } from '@nestjs/common';
import { ExpressionDto } from './dto/expression.dto';
import { CalculationResultDto } from './dto/calculation-result.dto';
import { CacheService } from 'src/cache/cache.service';
import { HistoryService } from 'src/history/history.service';

@Controller('/calculator')
export class CalculatorController {
  constructor(
    private historyService: HistoryService,
    private cacheService: CacheService,
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
