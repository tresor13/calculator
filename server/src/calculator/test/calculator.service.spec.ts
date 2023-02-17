import { Test } from '@nestjs/testing';
import { CalculatorController } from '../calculator.controller';
import {
  IRegExCreatorService,
  IExpressionCounterService,
} from '../interfaces/calculator.services.interfaces';
import {
  CalculatorServiceProvider,
  ExpressionCounterServiceProvider,
  RegExCreatorServiceProvider,
} from '../services';
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
  let service: ICalculatorService;
  let regExpCreator: IRegExCreatorService;
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
        CalculatorServiceProvider,
        ExpressionCounterServiceProvider,
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
  describe('getResult', () => {
    it('should return correct result of simple expression', () => {
      expect(service.getResult('2+2')).toBe('4');
      expect(service.getResult('2-2')).toBe('0');
      expect(service.getResult('2*3')).toBe('6');
      expect(service.getResult('2/2')).toBe('1');
      expect(service.getResult('0/8')).toBe('0');
      expect(service.getResult('-10')).toBe('-10');
      expect(service.getResult('8/0')).toBe('Infinity');
    });
    it('should return correct result of complex expresion', () => {
      expect(service.getResult('2+2/2')).toBe('3');
      expect(service.getResult('2*2/8*10')).toBe('5');
    });

    it('should return correct result of expression with brackets', () => {
      expect(service.getResult('((2+2)/-2)+4*(-3/-1)')).toBe('10');
      expect(service.getResult('{22/-2)+(11*2]')).toBe('11');
    });

    it('should work with floating values correctly', () => {
      expect(Number(service.getResult('0.1*0.2'))).toBeCloseTo(0.02);
      expect(Number(service.getResult('14900*(10.8/100)'))).toBeCloseTo(1609.2);
    });

    it('should return exponential value', () => {
      expect(service.getResult('0.2/1000000')).toBe('2.00e-7');
      expect(service.getResult('200*100000000000')).toBe('2.00e+13');
    });

    it('should return correct result of expressions with whitespaces', () => {
      expect(service.getResult('2/     2')).toBe('1');
    });

    it('should return NaN', () => {
      expect(service.getResult('2/lol')).toBe('NaN');
      expect(service.getResult('-+')).toBe('NaN');
    });
  });

  describe('exponentialToDecimal function:', () => {
    it('should return string', () => {
      expect(typeof service.exponentialToDecimal('2.00e+13')).toBe('string');
      expect(typeof service.exponentialToDecimal('test')).toBe('string');
    });

    it('should work with negative and positiva values', () => {
      expect(service.exponentialToDecimal('2.00e+8')).toBe('200000000');
      expect(service.exponentialToDecimal('2.0e-13')).toBe('0.00000000000020');
    });

    it('should not break with incorrect input', () => {
      expect(service.exponentialToDecimal('test')).toBe('test');
      expect(service.exponentialToDecimal('test.0e+8')).toBe('test00000000');
      expect(service.exponentialToDecimal('test.0e-8')).toBe('0.0000000test0');
      expect(service.exponentialToDecimal('test.0e-test')).toBe('0.test0');
    });
  });
});
