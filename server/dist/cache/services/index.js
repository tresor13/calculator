"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacherServiceProvider = void 0;
require("dotenv/config.js");
const interface_1 = require("../interface");
const cache_service_1 = require("./cache.service");
const cacheEnv = process.env.APP_CACHE ? process.env.APP_CACHE : 'default';
exports.CacherServiceProvider = {
    provide: interface_1.CACHE_SERVICE,
    useClass: cacheEnv === 'default' ? cache_service_1.DefaultCacheService : cache_service_1.DefaultCacheService,
};
//# sourceMappingURL=index.js.map