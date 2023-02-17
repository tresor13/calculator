import { Test } from '@nestjs/testing';
import { HISTORY_SERVICE } from '../../history';
import { CacheService, CACHE_SERVICE } from '../../cache';
import { DefaultHistoryService } from '../../history/services/history.service';
import { CalculatorController } from '../calculator.controller';

import { CALCULATOR_SERVICE } from '../constants';
import { ICalculatorService } from '../interfaces/calculator.services.interfaces';

describe('CaclulatorController', () => {
  let controller: CalculatorController;
  let service: Pick<jest.MockedObject<ICalculatorService>, 'getResult'>;
  let cache: Pick<
    jest.MockedObject<CacheService>,
    'checkInCache' | 'setToCache'
  >;
  let history: Pick<jest.MockedObject<DefaultHistoryService>, 'create'>;

  beforeAll(async () => {
    const modRef = await Test.createTestingModule({
      controllers: [CalculatorController],
      providers: [
        {
          provide: CALCULATOR_SERVICE,
          useValue: {
            getResult: jest.fn(),
          },
        },
        {
          provide: CACHE_SERVICE,
          useValue: {
            checkInCache: jest.fn(),
            setToCache: jest.fn(),
          },
        },
        {
          provide: HISTORY_SERVICE,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = modRef.get(CalculatorController);
    service = modRef.get(CALCULATOR_SERVICE);
    cache = modRef.get(CACHE_SERVICE);
    history = modRef.get(HISTORY_SERVICE);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getResult', () => {
    const dbResponse = {
      expression: '2+2+2*3',
      result: '10',
      _id: '63ecf3c0ca3cb4911dc5f013',
    };
    it('should get response from cache and not to call calculatorService', async () => {
      cache.checkInCache.mockResolvedValueOnce(undefined);
      cache.setToCache.mockResolvedValueOnce(dbResponse);

      expect(service.getResult).not.toHaveBeenCalled();
    });
    it('should get no response from the cache and perform a full caclulation', async () => {
      cache.checkInCache.mockResolvedValueOnce(undefined);
      service.getResult.mockReturnValue('10');
      history.create.mockResolvedValueOnce(dbResponse);
      cache.setToCache.mockResolvedValueOnce(dbResponse);
      await expect(
        controller.getResult({ expression: '2+2+2*3' }),
      ).resolves.toEqual(dbResponse);
    });
  });
});
