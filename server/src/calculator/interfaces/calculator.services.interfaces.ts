import { OperatorRegExp } from '../configs/types';

export interface CalculatorServiceInterface {
  getResult(expression: string): string;
  exponentialToDecimal(exponential: string): string;
}

export interface ExpressionCounterServiceInterface {
  countExpression(inputString: string, operator: OperatorRegExp): string;
  parseExprForMathEntities(expr: string, regexp: RegExp): string[];
}

export interface RegExCreatorServiceInterface {
  createExpressionRegExps(): {
    expressionWithBracketsRegEx: RegExp;
    noBracketsExpressionRegEx: RegExp;
    exponentialRegEx: RegExp;
  };
  makeOperatorsRegEx(): Array<{ regExp: string; type: string }>;
}
