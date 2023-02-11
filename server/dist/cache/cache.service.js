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
exports.CacheService = void 0;
const common_1 = require("@nestjs/common");
const calculator_service_1 = require("../calculator/calculator.service");
let CacheService = class CacheService {
    constructor(cacheManager, calculatorService) {
        this.cacheManager = cacheManager;
        this.calculatorService = calculatorService;
    }
    async checkInCache(expression) {
        const value = await this.cacheManager.get(expression);
        if (!value) {
            const result = this.calculatorService.getResult(expression);
            await this.cacheManager.set(expression, result, 0);
            return result;
        }
        return value;
    }
};
CacheService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CACHE_MANAGER')),
    __metadata("design:paramtypes", [Object, calculator_service_1.CalculatorService])
], CacheService);
exports.CacheService = CacheService;
//# sourceMappingURL=cache.service.js.map