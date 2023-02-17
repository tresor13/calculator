"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultExpressionCounterService = void 0;
const common_1 = require("@nestjs/common");
const configs_1 = require("../configs");
const configs_2 = require("../configs");
let DefaultExpressionCounterService = class DefaultExpressionCounterService {
    countExpression(inputString, operator) {
        const operatorRegEx = operator.regExp;
        const operatorType = operator.type;
        const operandRegEx = '\\d+(?:\\.\\d+)?';
        let regexp = new RegExp(`${operatorRegEx}[(]?\\s*(-?${operandRegEx})[)]?`);
        if (operatorType === configs_1.BINARY_OPERATOR_TYPE) {
            regexp = new RegExp(`(-?${operandRegEx})\\s*${operatorRegEx}\\s*(-?${operandRegEx})`);
        }
        if (!inputString.match(regexp)) {
            return inputString;
        }
        const replaced = inputString.replace(regexp, (inputString) => {
            const resultArr = this.parseExprForMathEntities(inputString, regexp);
            if (operatorType === configs_1.UNARY_OPERATOR_TYPE) {
                const [operator, num] = resultArr;
                const result = configs_2.operatorEntities[operator].count(Number(num));
                return `${result}`;
            }
            const [left, operator, right] = resultArr;
            const result = configs_2.operatorEntities[operator].count(Number(left), Number(right));
            return `${result}`;
        });
        return this.countExpression(replaced, operator);
    }
    parseExprForMathEntities(expr, regexp) {
        const result = expr.match(regexp);
        if (!result)
            return [];
        result.shift();
        return result;
    }
};
DefaultExpressionCounterService = __decorate([
    (0, common_1.Injectable)()
], DefaultExpressionCounterService);
exports.DefaultExpressionCounterService = DefaultExpressionCounterService;
//# sourceMappingURL=expression.counter.service.js.map