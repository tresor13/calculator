"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyProviders = exports.HISTORY_SERVICE = exports.HistoryModule = exports.HistoryService = void 0;
var history_service_1 = require("./services/history.service");
Object.defineProperty(exports, "HistoryService", { enumerable: true, get: function () { return history_service_1.DefaultHistoryService; } });
var history_module_1 = require("./history.module");
Object.defineProperty(exports, "HistoryModule", { enumerable: true, get: function () { return history_module_1.HistoryModule; } });
var constants_1 = require("./constants");
Object.defineProperty(exports, "HISTORY_SERVICE", { enumerable: true, get: function () { return constants_1.HISTORY_SERVICE; } });
var history_providers_1 = require("./history.providers");
Object.defineProperty(exports, "historyProviders", { enumerable: true, get: function () { return history_providers_1.historyProviders; } });
//# sourceMappingURL=index.js.map