"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyProviders = void 0;
const historyItem_schema_1 = require("../schemas/historyItem.schema");
exports.historyProviders = [
    {
        provide: 'HISTORY_MODEL',
        useFactory: (connection) => connection.model('HistoryItem', historyItem_schema_1.HistoryItem),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=history.providers.js.map