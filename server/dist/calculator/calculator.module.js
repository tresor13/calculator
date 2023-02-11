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
const cache_service_1 = require("../cache/cache.service");
const history_module_1 = require("../history/history.module");
const history_service_1 = require("../history/history.service");
const calculator_controller_1 = require("./calculator.controller");
const calculator_service_1 = require("./calculator.service");
const expression_counter_service_1 = require("./expression.counter.service");
const regex_creator_service_1 = require("./regex.creator.service");
let CalculatorModule = class CalculatorModule {
};
CalculatorModule = __decorate([
    (0, common_1.Module)({
        imports: [history_module_1.HistoryModule],
        controllers: [calculator_controller_1.CalculatorController],
        providers: [
            calculator_service_1.CalculatorService,
            expression_counter_service_1.ExpressionCounterService,
            regex_creator_service_1.RegExCreatorService,
            cache_service_1.CacheService,
            history_service_1.HistoryService,
        ],
    })
], CalculatorModule);
exports.CalculatorModule = CalculatorModule;
//# sourceMappingURL=calculator.module.js.map