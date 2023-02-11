import { OperatorRegExp } from 'src/calculator/configs/types';
export declare class ExpressionCounterService {
    countExpression(inputString: string, operator: OperatorRegExp): any;
    parseExprForMathEntities(expr: string, regexp: RegExp): any[] | RegExpMatchArray;
}
