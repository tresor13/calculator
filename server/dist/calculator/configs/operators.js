"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operatorEntities = void 0;
const constants_1 = require("./constants");
exports.operatorEntities = {
    sin: {
        regExpSymbol: 'sin',
        type: constants_1.UNARY_OPERATOR_TYPE,
        count: Math.sin,
        level: 3,
    },
    cos: {
        regExpSymbol: 'cos',
        type: constants_1.UNARY_OPERATOR_TYPE,
        level: 3,
        count: Math.cos,
    },
    '!': {
        regExpSymbol: '!',
        type: constants_1.UNARY_OPERATOR_TYPE,
        level: 3,
        count: function factorialize(num) {
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
        type: constants_1.BINARY_OPERATOR_TYPE,
        level: 1,
        count: (left, right) => left + right,
    },
    '-': {
        regExpSymbol: '-',
        type: constants_1.BINARY_OPERATOR_TYPE,
        level: 1,
        count: (left, right) => left - right,
    },
    '*': {
        regExpSymbol: '*',
        type: constants_1.BINARY_OPERATOR_TYPE,
        level: 2,
        count: (left, right) => left * right,
    },
    '/': {
        regExpSymbol: '/',
        type: constants_1.BINARY_OPERATOR_TYPE,
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
//# sourceMappingURL=operators.js.map