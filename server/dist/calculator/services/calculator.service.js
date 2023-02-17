"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCalculatorService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
let DefaultCalculatorService = class DefaultCalculatorService {
    constructor(expressionCounterService, regExCreatorService) {
        this.expressionCounterService = expressionCounterService;
        this.regExCreatorService = regExCreatorService;
    }
    getResult(expression) {
        const expressionWithoutSpaces = expression.replace(/\s/g, '');
        let expressionString = expressionWithoutSpaces;
        const { expressionWithBracketsRegEx, noBracketsExpressionRegEx, exponentialRegEx, } = this.regExCreatorService.createExpressionRegExps();
        if (expression.match(exponentialRegEx)) {
            expressionString = expression.replace(exponentialRegEx, (string) => this.exponentialToDecimal(string));
        }
        const expressionHasBrackets = !expressionString.match(noBracketsExpressionRegEx);
        const expressionHasNoBrackets = !expressionString.match(expressionWithBracketsRegEx);
        if (expressionHasBrackets && expressionHasNoBrackets) {
            return 'NaN';
        }
        if (expressionHasBrackets) {
            const iter = expressionString.replace(expressionWithBracketsRegEx, (expr) => {
                const exprWithoutBrackets = expr.slice(1, -1);
                return this.getResult(exprWithoutBrackets);
            });
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
    exponentialToDecimal(exponential) {
        let decimal = exponential.toLowerCase();
        if (decimal.includes('e+')) {
            const exponentialSplitted = decimal.split('e+');
            let postfix = '';
            for (let i = 0; i <
                +exponentialSplitted[1] -
                    (exponentialSplitted[0].includes('.')
                        ? exponentialSplitted[0].split('.')[1].length
                        : 0); i++) {
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
};
DefaultCalculatorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.EXPRESSION_COUNTER_SERVICE)),
    __param(1, (0, common_1.Inject)(constants_1.REGEXP_CREATOR_SERVICE)),
    __metadata("design:paramtypes", [Object, Object])
], DefaultCalculatorService);
exports.DefaultCalculatorService = DefaultCalculatorService;
//# sourceMappingURL=calculator.service.js.map