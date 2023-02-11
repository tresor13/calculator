"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExCreatorService = void 0;
const common_1 = require("@nestjs/common");
const configs_1 = require("./configs");
const configs_2 = require("./configs");
const configs_3 = require("./configs");
let RegExCreatorService = class RegExCreatorService {
    createExpressionRegExps() {
        const { opened, closed } = configs_2.parentheses;
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
            if (group.type === configs_3.UNARY_OPERATOR_TYPE) {
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
        Object.values(configs_1.operatorEntities).forEach((operator) => {
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
            { regExp: `(${thirdLevelOperators})`, type: configs_3.UNARY_OPERATOR_TYPE },
            { regExp: `([${secondLevelOperators}])`, type: configs_3.BINARY_OPERATOR_TYPE },
            { regExp: `([${firstLevelOperators}])`, type: configs_3.BINARY_OPERATOR_TYPE },
        ];
        return operatorsRegExp;
    }
};
RegExCreatorService = __decorate([
    (0, common_1.Injectable)()
], RegExCreatorService);
exports.RegExCreatorService = RegExCreatorService;
//# sourceMappingURL=regex.creator.service.js.map