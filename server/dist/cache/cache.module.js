"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomCacheModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCacheModule = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("./services");
const services_2 = require("../calculator/services");
let CustomCacheModule = CustomCacheModule_1 = class CustomCacheModule {
    static forRoot() {
        return {
            imports: [common_1.CacheModule.register({ isGlobal: true })],
            module: CustomCacheModule_1,
            providers: [
                services_1.CacherServiceProvider,
                services_2.CalculatorServiceProvider,
                services_2.ExpressionCounterServiceProvider,
                services_2.RegExCreatorServiceProvider,
            ],
            exports: [CustomCacheModule_1],
        };
    }
};
CustomCacheModule = CustomCacheModule_1 = __decorate([
    (0, common_1.Module)({})
], CustomCacheModule);
exports.CustomCacheModule = CustomCacheModule;
//# sourceMappingURL=cache.module.js.map