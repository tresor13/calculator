import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CalculatorService } from 'src/calculator/calculator.service';

@Injectable()
export class CacheService {
  constructor(
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
    private readonly calculatorService: CalculatorService,
  ) {}
  async checkInCache(expression: string) {
    const value = await this.cacheManager.get(expression);
    if (!value) {
      const result = this.calculatorService.getResult(expression);
      await this.cacheManager.set(expression, result, 0);
      return result;
    }
    return value;
  }
}
