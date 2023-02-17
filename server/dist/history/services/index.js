"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryServiceProvider = void 0;
require("dotenv/config.js");
const constants_1 = require("../constants");
const history_service_1 = require("./history.service");
const dbEnv = process.env.APP_DB ? process.env.APP_DB : 'mongo';
exports.HistoryServiceProvider = {
    provide: constants_1.HISTORY_SERVICE,
    useClass: dbEnv === 'mongo' ? history_service_1.DefaultHistoryService : history_service_1.DefaultHistoryService,
};
//# sourceMappingURL=index.js.map