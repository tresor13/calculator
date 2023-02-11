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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const historyItem_schema_1 = require("./schemas/historyItem.schema");
const maxNumberOfDBItemsToDisplay = 10;
let HistoryService = class HistoryService {
    constructor(historyModel) {
        this.historyModel = historyModel;
    }
    async create(dto) {
        const historyItem = await this.historyModel.create(Object.assign({}, dto));
        return historyItem;
    }
    async getAll() {
        const allHistoryItems = await this.historyModel.find().sort({ _id: -1 });
        return allHistoryItems;
    }
    async getOne(id) {
        const historyItem = await this.historyModel.findById(id);
        return historyItem;
    }
    async delete(id) {
        const historyItem = await this.historyModel.findByIdAndDelete(id);
        return historyItem.id;
    }
};
HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(historyItem_schema_1.HistoryItem.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map