"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryItem = void 0;
const mongoose = require("mongoose");
exports.HistoryItem = new mongoose.Schema({
    expression: String,
    result: String,
});
//# sourceMappingURL=historyItem.schema.js.map