"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeOperatorsRegEx = void 0;
const constants_1 = require("../constants");
const makeOperatorsRegEx = (entities) => {
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
    thirdLevelOperators = thirdLevelOperators.slice(0, -1);
    const operatorsRegExp = [
        { regExp: `(${thirdLevelOperators})`, type: constants_1.UNARY_OPERATOR_TYPE },
        { regExp: `([${secondLevelOperators}])`, type: constants_1.BINARY_OPERATOR_TYPE },
        { regExp: `([${firstLevelOperators}])`, type: constants_1.BINARY_OPERATOR_TYPE },
    ];
    return operatorsRegExp;
};
exports.makeOperatorsRegEx = makeOperatorsRegEx;
//# sourceMappingURL=makeOperatorsRegEx.js.map