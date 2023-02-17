"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionCounterServiceProvider = exports.RegExCreatorServiceProvider = exports.CalculatorServiceProvider = void 0;
require("dotenv/config.js");
const calculator_service_1 = require("./calculator.service");
const regex_creator_service_1 = require("./regex.creator.service");
const expression_counter_service_1 = require("./expression.counter.service");
const constants_1 = require("../constants");
const calculatorEnv = process.env.APP_CALCULATOR
    ? process.env.APP_CALCULATOR
    : 'default';
exports.CalculatorServiceProvider = {
    provide: constants_1.CALCULATOR_SERVICE,
    useClass: calculatorEnv === 'default'
        ? calculator_service_1.DefaultCalculatorService
        : calculator_service_1.DefaultCalculatorService,
};
exports.RegExCreatorServiceProvider = {
    provide: constants_1.REGEXP_CREATOR_SERVICE,
    useClass: calculatorEnv === 'default'
        ? regex_creator_service_1.DefaultRegExCreatorService
        : regex_creator_service_1.DefaultRegExCreatorService,
};
exports.ExpressionCounterServiceProvider = {
    provide: constants_1.EXPRESSION_COUNTER_SERVICE,
    useClass: calculatorEnv === 'default'
        ? expression_counter_service_1.DefaultExpressionCounterService
        : expression_counter_service_1.DefaultExpressionCounterService,
};
//# sourceMappingURL=index.js.map