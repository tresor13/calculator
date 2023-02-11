"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DBModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let DBModule = DBModule_1 = class DBModule {
    static forRoot() {
        return {
            imports: [mongoose_1.MongooseModule.forRoot(process.env.DATA_BASE_URI)],
            module: DBModule_1,
        };
    }
};
DBModule = DBModule_1 = __decorate([
    (0, common_1.Module)({})
], DBModule);
exports.DBModule = DBModule;
//# sourceMappingURL=db.module.js.map