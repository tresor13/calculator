"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorService = void 0;
const calculator_stub_1 = require("../test/stubs/calculator.stub");
exports.CalculatorService = jest.fn().mockReturnValue({
    getResult: jest.fn().mockReturnValue((0, calculator_stub_1.calculatorStub)()),
});
//# sourceMappingURL=calculator.service.js.map