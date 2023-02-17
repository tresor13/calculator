"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorModule = void 0;
const common_1 = require("@nestjs/common");
const history_1 = require("../history");
const calculator_controller_1 = require("./calculator.controller");
const cache_module_1 = require("../cache/cache.module");
const history_2 = require("../history");
const db_1 = require("../db");
const services_1 = require("./services");
const services_2 = require("../cache/services");
const services_3 = require("../history/services");
let CalculatorModule = class CalculatorModule {
};
CalculatorModule = __decorate([
    (0, common_1.Module)({
        imports: [history_1.HistoryModule, cache_module_1.CustomCacheModule],
        controllers: [calculator_controller_1.CalculatorController],
        providers: [
            services_1.CalculatorServiceProvider,
            services_1.RegExCreatorServiceProvider,
            services_1.ExpressionCounterServiceProvider,
            services_2.CacherServiceProvider,
            services_3.HistoryServiceProvider,
            ...history_2.historyProviders,
            ...db_1.databaseProviders,
        ],
    })
], CalculatorModule);
exports.CalculatorModule = CalculatorModule;
//# sourceMappingURL=calculator.module.js.map