import { calculatorStub } from '../test/stubs/calculator.stub';

export const CalculatorService = jest.fn().mockReturnValue({
  getResult: jest.fn().mockReturnValue(calculatorStub()),
});
