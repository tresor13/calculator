import { ICalculatorService, IExpressionCounterService, IRegExCreatorService } from '../interfaces/calculator.services.interfaces';
export declare class DefaultCalculatorService implements ICalculatorService {
    private readonly expressionCounterService;
    private readonly regExCreatorService;
    constructor(expressionCounterService: IExpressionCounterService, regExCreatorService: IRegExCreatorService);
    getResult(expression: string): string;
    exponentialToDecimal(exponential: string): string;
}
