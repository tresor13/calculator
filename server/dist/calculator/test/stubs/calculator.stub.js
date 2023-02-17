"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorStub = void 0;
const calculatorStub = () => {
    const request = { expression: '2+2+2*3' };
    const respond = { expression: '2+2+2*3', result: '10', _id: 'test', _v: 0 };
    return { request, respond };
};
exports.calculatorStub = calculatorStub;
//# sourceMappingURL=calculator.stub.js.map