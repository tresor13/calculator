import { ClientResponseDto } from 'src/calculator/dto/client.response.dto.ts';
import { ExpressionDto } from 'src/calculator/dto/expression.dto';
interface CalculatorStub {
    request: ExpressionDto;
    respond: ClientResponseDto;
}
export declare const calculatorStub: () => CalculatorStub;
export {};
