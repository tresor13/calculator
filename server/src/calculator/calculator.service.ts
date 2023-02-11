import { Injectable } from '@nestjs/common';

import { ExpressionCounterService } from './expression.counter.service';
import { RegExCreatorService } from './regex.creator.service';

@Injectable()
export class CalculatorService {
  constructor(
    private readonly expressionCounterService: ExpressionCounterService,
    private readonly regExCreatorService: RegExCreatorService,
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
    const result = operatorsRegExp.reduce((acc, operator) => {
      return this.expressionCounterService.countExpression(acc, operator);
    }, expressionString);

    if (result.length > 12) {
      return new Number(result).toExponential(2);
    }
    return result;
  }

  exponentialToDecimal(exponential: string) {
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
