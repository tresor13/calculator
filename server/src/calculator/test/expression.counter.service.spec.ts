import { Test } from '@nestjs/testing';
import { CalculatorController } from '../calculator.controller';
import {
  IRegExCreatorService,
  IExpressionCounterService,
} from '../interfaces/calculator.services.interfaces';
import { ExpressionCounterServiceProvider } from '../services';
import { ICalculatorService } from '../interfaces/calculator.services.interfaces';
import {
  CALCULATOR_SERVICE,
  EXPRESSION_COUNTER_SERVICE,
  REGEXP_CREATOR_SERVICE,
} from '../constants';
import { HistoryModule, HISTORY_SERVICE } from '../../history';
import { IHistoryService } from '../../history/interfaces/interface';
import { ICacheService, CACHE_SERVICE } from '../../cache/interface';
import { OperatorRegExp } from '../configs/types';

describe('Calculator Service', () => {
  let service: Pick<
    jest.MockedObject<ICalculatorService>,
    'getResult' | 'exponentialToDecimal'
  >;
  let regExpCreator: Pick<
    jest.MockedObject<IRegExCreatorService>,
    'createExpressionRegExps' | 'makeOperatorsRegEx'
  >;
  let expressionCounter: IExpressionCounterService;
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
        ExpressionCounterServiceProvider,
        {
          provide: REGEXP_CREATOR_SERVICE,
          useValue: {
            createExpressionRegExps: jest.fn(),
            makeOperatorsRegEx: jest.fn(),
          },
        },
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

  describe('countExpression function:', () => {
    let firstLevelOperators: OperatorRegExp;
    let secondLevelOperators: OperatorRegExp;
    let thirdLevelOperators: OperatorRegExp;

    let testOperators: OperatorRegExp;

    beforeEach(() => {
      thirdLevelOperators = { regExp: '(sin|cos|!)', type: 'unary' };
      secondLevelOperators = { regExp: '([*/])', type: 'binary' };
      firstLevelOperators = { regExp: '([+-])', type: 'binary' };

      testOperators = { regExp: 'test', type: 'test' };
    });

    it('should work with all correct operators', () => {
      expect(
        expressionCounter.countExpression('sin(0)', thirdLevelOperators),
      ).toBe('0');
      expect(
        expressionCounter.countExpression('2*2/2', secondLevelOperators),
      ).toBe('2');
      expect(
        expressionCounter.countExpression('2+2-1', firstLevelOperators),
      ).toBe('3');
    });

    it('should work with incorrect operators', () => {
      expect(expressionCounter.countExpression('2+2', testOperators)).toBe(
        '2+2',
      );
    });

    it('should work with incorrect input', () => {
      expect(
        expressionCounter.countExpression('!(test)', thirdLevelOperators),
      ).toBe('!(test)');
    });
  });

  describe('parseExprForMathEntities function:', () => {
    const binaryOperatorRegExp =
      /(-?\d+(?:\.\d+)?)\s*([*/])\s*(-?\d+(?:\.\d+)?)/;
    const unaryOperatorRegExp = /(sin|cos|!)[(]?\s*(-?\d+(?:\.\d+)?)[)]?/;

    const testRegExp = /[test]/;

    it('should return array', () => {
      expect(
        Array.isArray(
          expressionCounter.parseExprForMathEntities(
            '2*2',
            binaryOperatorRegExp,
          ),
        ),
      ).toBeTruthy();

      expect(
        Array.isArray(
          expressionCounter.parseExprForMathEntities('test', testRegExp),
        ),
      ).toBeTruthy();
    });

    it('should return array with at least 2 values when operator is unary type', () => {
      expect(
        expressionCounter.parseExprForMathEntities(
          'sin(45)',
          unaryOperatorRegExp,
        ).length >= 2,
      ).toBeTruthy();
    });

    it('should return array with at least 3 values when operator is unary type', () => {
      expect(
        expressionCounter.parseExprForMathEntities('2*4', binaryOperatorRegExp)
          .length >= 3,
      ).toBeTruthy();
    });

    it('should parse input string correctly', () => {
      const [number1, binaryOperator, number2] =
        expressionCounter.parseExprForMathEntities('2*4', binaryOperatorRegExp);
      expect(number1).toBe('2');
      expect(number2).toBe('4');
      expect(binaryOperator).toBe('*');

      const [unaryOperator, number] =
        expressionCounter.parseExprForMathEntities(
          'sin(45)',
          unaryOperatorRegExp,
        );
      expect(number).toBe('45'), expect(unaryOperator).toBe('sin');
    });
  });
});
