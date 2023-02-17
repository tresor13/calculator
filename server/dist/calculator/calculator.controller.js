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
exports.CalculatorController = void 0;
const common_1 = require("@nestjs/common");
const expression_dto_1 = require("./dto/expression.dto");
const cache_1 = require("../cache");
const history_1 = require("../history");
const constants_1 = require("./constants");
let CalculatorController = class CalculatorController {
    constructor(historyService, cacheService, calculatorService) {
        this.historyService = historyService;
        this.cacheService = cacheService;
        this.calculatorService = calculatorService;
    }
    getResult(expressionDto) {
        const expression = expressionDto.expression;
        const response = this.cacheService
            .checkInCache(expression)
            .then((response) => {
            if (!response) {
                const calculationResult = this.calculatorService.getResult(expression);
                const clientDto = this.historyService
                    .create({
                    expression,
                    result: calculationResult,
                })
                    .then((dbResponse) => {
                    return this.cacheService.setToCache(dbResponse);
                });
                return clientDto;
            }
            return this.historyService.create({ expression, result: response });
        });
        return response;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [expression_dto_1.ExpressionDto]),
    __metadata("design:returntype", Promise)
], CalculatorController.prototype, "getResult", null);
CalculatorController = __decorate([
    (0, common_1.Controller)('/calculator'),
    __param(0, (0, common_1.Inject)(history_1.HISTORY_SERVICE)),
    __param(1, (0, common_1.Inject)(cache_1.CACHE_SERVICE)),
    __param(2, (0, common_1.Inject)(constants_1.CALCULATOR_SERVICE)),
    __metadata("design:paramtypes", [Object, Object, Object])
], CalculatorController);
exports.CalculatorController = CalculatorController;
//# sourceMappingURL=calculator.controller.js.map