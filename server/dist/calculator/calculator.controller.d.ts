import { ExpressionDto } from './dto/expression.dto';
import { ClientResponseDto } from './dto/client.response.dto.ts';
import { ICalculatorService } from './interfaces/calculator.services.interfaces';
import { ICacheService } from 'src/cache/interface';
import { IHistoryService } from 'src/history/interfaces/interface';
export declare class CalculatorController {
    private historyService;
    private readonly cacheService;
    private readonly calculatorService;
    constructor(historyService: IHistoryService, cacheService: ICacheService, calculatorService: ICalculatorService);
    getResult(expressionDto: ExpressionDto): Promise<ClientResponseDto>;
}
