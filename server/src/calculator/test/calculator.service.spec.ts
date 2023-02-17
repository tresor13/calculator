import { Test } from '@nestjs/testing';
import { CalculatorController } from '../calculator.controller';
import { CalculatorService } from '../services/calculator.service';
import { DefaultExpressionCounterService } from '../services/expression.counter.service';
import {
  EXPRESSION_COUNTER_SERVICE,
  REGEXP_CREATOR_SERVICE_INTERFACE,
} from '../constants';
import { RegExCreatorService } from '../services/regex.creator.service';

describe('Calculator Service', () => {
  let service: CalculatorService;
  let regExpCreator: Pick<
    jest.MockedObject<RegExCreatorService>,
    'createExpressionRegExps' | 'makeOperatorsRegEx'
  >;
  let expressionCounter: Pick<
    jest.MockedObject<DefaultExpressionCounterService>,
    'countExpression' | 'parseExprForMathEntities'
  >;
});

beforeAll(async () => {
  const modRef = await Test.createTestingModule({
    controllers: [CalculatorController],
    providers: [
      {
        provide: REGEXP_CREATOR_SERVICE_INTERFACE,
        useValue: {
          createExpressionRegEx: jest.fn(),
          makeOperatorsRegEx: jest.fn(),
        },
      },
      {
        provide: EXPRESSION_COUNTER_SERVICE,
        useValue: {
          countExpression: jest.fn(),
          parseExprForMathEntities: jest.fn(),
        },
      },
    ],
  }).compile();
});
