"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
require("dotenv/config.js");
const constants_1 = require("./constants");
exports.databaseProviders = [
    {
        provide: constants_1.DATABASE_CONNECTION,
        useFactory: async () => await mongoose.connect(process.env.DATA_BASE_URI),
    },
];
//# sourceMappingURL=db.providers.js.map