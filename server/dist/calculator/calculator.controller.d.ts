import { ExpressionDto } from './dto/expression.dto';
import { CalculationResultDto } from './dto/calculation-result.dto';
import { CacheService } from 'src/cache/cache.service';
import { HistoryService } from 'src/history/history.service';
export declare class CalculatorController {
    private historyService;
    private cacheService;
    constructor(historyService: HistoryService, cacheService: CacheService);
    getResult(expressionDto: ExpressionDto): Promise<CalculationResultDto>;
}
