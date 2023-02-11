import { ExpressionCounterService } from './expression.counter.service';
import { RegExCreatorService } from './regex.creator.service';
export declare class CalculatorService {
    private readonly expressionCounterService;
    private readonly regExCreatorService;
    constructor(expressionCounterService: ExpressionCounterService, regExCreatorService: RegExCreatorService);
    getResult(expression: string): string;
    exponentialToDecimal(exponential: string): string;
}
