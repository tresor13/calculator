import { Injectable } from '@nestjs/common';
import { operatorEntities as entities } from './configs';
import { parentheses } from 'src/calculator/configs';
import { UNARY_OPERATOR_TYPE, BINARY_OPERATOR_TYPE } from './configs';

@Injectable()
export class RegExCreatorService {
  createExpressionRegExps() {
    const { opened, closed } = parentheses;
    let openBrackets = '';
    let closeBrackets = '';

    opened.forEach((bracket, index) => {
      openBrackets += bracket;
      closeBrackets += closed[index];
    });
    openBrackets = `[${openBrackets}]`;
    closeBrackets = `[${closeBrackets}]`;

    let unaryOperators = '';
    let binaryOperators = '';

    const operatorsRegExp = this.makeOperatorsRegEx();

    operatorsRegExp.forEach((group) => {
      const regExpWithoutBrackets = group.regExp.replace(/[\])}[{(]/g, '');

      if (group.type === UNARY_OPERATOR_TYPE) {
        unaryOperators += regExpWithoutBrackets;

        return;
      }
      binaryOperators += regExpWithoutBrackets;
      return;
    });

    unaryOperators = `(?:${unaryOperators})`;
    binaryOperators = `[${binaryOperators}]`;

    const exponentialRegEx = /-?[0-9].?([.,][0-9]+)e[+-]?[0-9]*/g;
    const expressionWithBracketsRegEx = `${openBrackets}${unaryOperators}?-?[0-9]((${binaryOperators}?${unaryOperators}?-?[0-9]+)?([.,][0-9]+)?)*?${closeBrackets}`;
    const noBracketsExpressionRegEx = `^${unaryOperators}?-?[0-9]((${binaryOperators}?${unaryOperators}?-?[0-9]+)?([.,][0-9]+)?)*?$`;

    return {
      expressionWithBracketsRegEx: new RegExp(expressionWithBracketsRegEx, 'g'),
      noBracketsExpressionRegEx: new RegExp(noBracketsExpressionRegEx),
      exponentialRegEx,
    };
  }
  makeOperatorsRegEx() {
    let firstLevelOperators = '';
    let secondLevelOperators = '';
    let thirdLevelOperators = '';

    Object.values(entities).forEach((operator) => {
      if (operator.level === 1) {
        firstLevelOperators += `${operator.regExpSymbol}`;
        return;
      }
      if (operator.level === 2) {
        secondLevelOperators += `${operator.regExpSymbol}`;
        return;
      }
      if (operator.level === 3) {
        thirdLevelOperators += `${operator.regExpSymbol}|`;
        return;
      }
    });

    thirdLevelOperators = thirdLevelOperators.slice(0, -1); //this is needed to delete last OR operator from RegEx

    const operatorsRegExp = [
      { regExp: `(${thirdLevelOperators})`, type: UNARY_OPERATOR_TYPE },
      { regExp: `([${secondLevelOperators}])`, type: BINARY_OPERATOR_TYPE },
      { regExp: `([${firstLevelOperators}])`, type: BINARY_OPERATOR_TYPE },
    ];

    return operatorsRegExp;
  }
}
