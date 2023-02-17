import { Inject, Injectable } from '@nestjs/common';
import {
  ICalculatorService,
  IExpressionCounterService,
  IRegExCreatorService,
} from '../interfaces/calculator.services.interfaces';
import {
  EXPRESSION_COUNTER_SERVICE,
  REGEXP_CREATOR_SERVICE,
} from '../constants';

@Injectable()
export class DefaultCalculatorService implements ICalculatorService {
  constructor(
    @Inject(EXPRESSION_COUNTER_SERVICE)
    private readonly expressionCounterService: IExpressionCounterService,
    @Inject(REGEXP_CREATOR_SERVICE)
    private readonly regExCreatorService: IRegExCreatorService,
  ) {}

  getResult(expression: string): string {
    const expressionWithoutSpaces = expression.replace(/\s/g, '');
    let expressionString = expressionWithoutSpaces;

    const {
      expressionWithBracketsRegEx,
      noBracketsExpressionRegEx,
      exponentialRegEx,
    } = this.regExCreatorService.createExpressionRegExps();

    if (expression.match(exponentialRegEx)) {
      expressionString = expression.replace(exponentialRegEx, (string) =>
        this.exponentialToDecimal(string),
      );
    }

    const expressionHasBrackets = !expressionString.match(
      noBracketsExpressionRegEx,
    );
    const expressionHasNoBrackets = !expressionString.match(
      expressionWithBracketsRegEx,
    );

    if (expressionHasBrackets && expressionHasNoBrackets) {
      return 'NaN';
    }

    if (expressionHasBrackets) {
      const iter = expressionString.replace(
        expressionWithBracketsRegEx,
        (expr) => {
          const exprWithoutBrackets = expr.slice(1, -1);

          return this.getResult(exprWithoutBrackets);
        },
      );

      return this.getResult(iter);
    }
    const operatorsRegExp = this.regExCreatorService.makeOperatorsRegEx();
    const result: string = operatorsRegExp.reduce((acc, operator) => {
      return this.expressionCounterService.countExpression(acc, operator);
    }, expressionString);

    if (result.length > 12) {
      return new Number(result).toExponential(2);
    }
    return result;
  }

  exponentialToDecimal(exponential: string): string {
    let decimal = exponential.toLowerCase();
    if (decimal.includes('e+')) {
      const exponentialSplitted = decimal.split('e+');
      let postfix = '';

      for (
        let i = 0;
        i <
        +exponentialSplitted[1] -
          (exponentialSplitted[0].includes('.')
            ? exponentialSplitted[0].split('.')[1].length
            : 0);
        i++
      ) {
        postfix += '0';
      }

      decimal = exponentialSplitted[0].replace('.', '') + postfix;
    }
    if (decimal.toLowerCase().includes('e-')) {
      const exponentialSplitted = decimal.split('e-');
      let prefix = '0.';
      for (let i = 0; i < +exponentialSplitted[1] - 1; i++) {
        prefix += '0';
      }
      decimal = prefix + exponentialSplitted[0].replace('.', '');
    }
    return decimal;
  }
}
