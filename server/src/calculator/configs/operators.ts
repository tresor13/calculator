import { UNARY_OPERATOR_TYPE, BINARY_OPERATOR_TYPE } from './constants';
import { OperatorEntities } from './types';

export const operatorEntities: OperatorEntities = {
  sin: {
    regExpSymbol: 'sin',
    type: UNARY_OPERATOR_TYPE,
    count: Math.sin,
    level: 3,
  },
  cos: {
    regExpSymbol: 'cos',
    type: UNARY_OPERATOR_TYPE,
    level: 3,
    count: Math.cos,
  },
  '!': {
    regExpSymbol: '!',
    type: UNARY_OPERATOR_TYPE,
    level: 3,
    count: function factorialize(num: number): number {
      if (num < 0) {
        return -1;
      }
      if (num == 0) {
        return 1;
      }

      return num * factorialize(num - 1);
    },
  },
  '+': {
    regExpSymbol: '+',
    type: BINARY_OPERATOR_TYPE,
    level: 1,
    count: (left, right) => left + right,
  },
  '-': {
    regExpSymbol: '-',
    type: BINARY_OPERATOR_TYPE,
    level: 1,
    count: (left, right) => left - right,
  },
  '*': {
    regExpSymbol: '*',
    type: BINARY_OPERATOR_TYPE,
    level: 2,
    count: (left, right) => left * right,
  },
  '/': {
    regExpSymbol: '/',
    type: BINARY_OPERATOR_TYPE,
    level: 2,
    count: (left, right) => left / right,
  },
  '=': {
    regExpSymbol: '=',
    type: 'result',
    level: null,
    count: (_left, _right) => null,
  },
};
