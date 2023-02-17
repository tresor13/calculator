import { Test } from '@nestjs/testing';
import { CalculatorController } from '../calculator.controller';
import {
  IRegExCreatorService,
  IExpressionCounterService,
} from '../interfaces/calculator.services.interfaces';
import { RegExCreatorServiceProvider } from '../services';
import { ICalculatorService } from '../interfaces/calculator.services.interfaces';
import {
  CALCULATOR_SERVICE,
  EXPRESSION_COUNTER_SERVICE,
  REGEXP_CREATOR_SERVICE,
} from '../constants';
import { HistoryModule, HISTORY_SERVICE } from '../../history';
import { IHistoryService } from '../../history/interfaces/interface';
import { ICacheService, CACHE_SERVICE } from '../../cache/interface';

describe('Calculator Service', () => {
  let service: Pick<
    jest.MockedObject<ICalculatorService>,
    'getResult' | 'exponentialToDecimal'
  >;
  let regExpCreator: IRegExCreatorService;
  let expressionCounter: Pick<
    jest.MockedObject<IExpressionCounterService>,
    'countExpression' | 'parseExprForMathEntities'
  >;
  let history: Pick<jest.MockedObject<IHistoryService>, 'create'>;
  let cache: Pick<
    jest.MockedObject<ICacheService>,
    'checkInCache' | 'setToCache'
  >;

  beforeAll(async () => {
    const modRef = await Test.createTestingModule({
      controllers: [CalculatorController, HistoryModule],
      providers: [
        { provide: HISTORY_SERVICE, useValue: { create: jest.fn() } },
        {
          provide: CACHE_SERVICE,
          useValue: {
            checkInCache: jest.fn(),
            setToCache: jest.fn(),
          },
        },
        {
          provide: CALCULATOR_SERVICE,
          useValue: { getResult: jest.fn(), exponentialToDecimal: jest.fn() },
        },
        {
          provide: EXPRESSION_COUNTER_SERVICE,
          useValue: {
            countExpression: jest.fn(),
            parseExprForMathEntities: jest.fn(),
          },
        },
        RegExCreatorServiceProvider,
      ],
    }).compile();

    service = modRef.get(CALCULATOR_SERVICE);
    regExpCreator = modRef.get(REGEXP_CREATOR_SERVICE);
    expressionCounter = modRef.get(EXPRESSION_COUNTER_SERVICE);
    history = modRef.get(HISTORY_SERVICE);
    cache = modRef.get(CACHE_SERVICE);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('createExpressionRegExps function:', () => {
    it('should return object of RegExps', () => {
      expect(typeof regExpCreator.createExpressionRegExps()).toBe('object');

      expect(regExpCreator.createExpressionRegExps()).toHaveProperty(
        'exponentialRegEx',
      );
      expect(regExpCreator.createExpressionRegExps()).toHaveProperty(
        'expressionWithBracketsRegEx',
      );
      expect(regExpCreator.createExpressionRegExps()).toHaveProperty(
        'noBracketsExpressionRegEx',
      );

      expect(
        regExpCreator.createExpressionRegExps().exponentialRegEx,
      ).toBeInstanceOf(RegExp);
      expect(
        regExpCreator.createExpressionRegExps().expressionWithBracketsRegEx,
      ).toBeInstanceOf(RegExp);
      expect(
        regExpCreator.createExpressionRegExps().noBracketsExpressionRegEx,
      ).toBeInstanceOf(RegExp);
    });
  });

  describe('createExpressionRegExps function:', () => {
    it('should return RegExps of 3 levels of operators', () => {
      expect(regExpCreator.makeOperatorsRegEx().length).toBe(3);
    });
  });
});
