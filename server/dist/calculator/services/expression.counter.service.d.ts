import { OperatorRegExp } from '../configs/types';
import { IExpressionCounterService } from '../interfaces/calculator.services.interfaces';
export declare class DefaultExpressionCounterService implements IExpressionCounterService {
    countExpression(inputString: string, operator: OperatorRegExp): string;
    parseExprForMathEntities(expr: string, regexp: RegExp): string[];
}
