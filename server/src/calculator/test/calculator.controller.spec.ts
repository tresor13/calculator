import { Test } from '@nestjs/testing';
import { HistoryModule, HISTORY_SERVICE } from '../../history';
import { CacheService, CACHE_SERVICE } from '../../cache';
import { HistoryService } from '../../history/history.service';
import { CalculatorController } from '../calculator.controller';
import { CalculatorService } from '../calculator.service';
import { calculatorStub } from './stubs/calculator.stub';
import { RegExCreatorService } from '../regex.creator.service';
import { ExpressionCounterService } from '../expression.counter.service';
import {
  CALCULATOR_SERVICE,
  EXPRESSION_COUNTER_SERVICE,
  REGEXP_CREATOR_SERVICE_INTERFACE,
} from '../interfaces/constants';

jest.mock('../calculator.service.ts');

let calculatorController: CalculatorController;
let calculatorService: CalculatorService;

beforeEach(async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [HistoryModule],
    controllers: [CalculatorController],

    providers: [
      { useClass: CalculatorService, provide: CALCULATOR_SERVICE },
      {
        useClass: ExpressionCounterService,
        provide: EXPRESSION_COUNTER_SERVICE,
      },
      {
        useClass: RegExCreatorService,
        provide: REGEXP_CREATOR_SERVICE_INTERFACE,
      },
      { useClass: CacheService, provide: CACHE_SERVICE },
      { useClass: HistoryService, provide: HISTORY_SERVICE },
    ],
  }).compile();
  calculatorController =
    moduleRef.get<CalculatorController>(CalculatorController);
  calculatorService = moduleRef.get<CalculatorService>(CalculatorService);
  jest.clearAllMocks();
});

describe('getResult', () => {
  describe('when getResult is called', () => {
    beforeEach(async () => {
      await calculatorController.getResult(calculatorStub().request);
    });
    test('then it should call calculatorService', () => {
      expect(calculatorService.getResult).toBeCalledWith(
        calculatorStub().request.expression,
      );
    });
  });
});
