import { CalculationResultDto } from 'src/calculator/dto/calculation-result.dto';
import { ExpressionDto } from 'src/calculator/dto/expression.dto';

interface CalculatorStub {
  request: ExpressionDto;
  respond: CalculationResultDto;
}

export const calculatorStub = (): CalculatorStub => {
  const request = { expression: '2+2+2*3' };
  const respond = { expression: '2+2+2*3', result: '10', _id: 'test', _v: 0 };
  return { request, respond };
};
