import { OperatorRegExp } from '../configs/types';

export interface ICalculatorService {
  getResult(expression: string): string;
  exponentialToDecimal(exponential: string): string;
}

export interface IExpressionCounterService {
  countExpression(inputString: string, operator: OperatorRegExp): string;
  parseExprForMathEntities(expr: string, regexp: RegExp): string[];
}

export interface IRegExCreatorService {
  createExpressionRegExps(): {
    expressionWithBracketsRegEx: RegExp;
    noBracketsExpressionRegEx: RegExp;
    exponentialRegEx: RegExp;
  };
  makeOperatorsRegEx(): Array<{ regExp: string; type: string }>;
}
