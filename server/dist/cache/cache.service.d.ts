import { Cache } from 'cache-manager';
import { CalculatorService } from 'src/calculator/calculator.service';
export declare class CacheService {
    private cacheManager;
    private readonly calculatorService;
    constructor(cacheManager: Cache, calculatorService: CalculatorService);
    checkInCache(expression: string): Promise<unknown>;
}
