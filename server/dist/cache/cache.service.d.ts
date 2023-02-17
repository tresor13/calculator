import { Cache } from 'cache-manager';
import { HistoryItemResponseDto } from 'src/history/dto/history.item.response.dto';
import { CacheServiceInterface } from './interface';
export declare class CacheService implements CacheServiceInterface {
    private cacheManager;
    constructor(cacheManager: Cache);
    checkInCache(expression: string): Promise<unknown>;
    setToCache(cacheData: HistoryItemResponseDto): Promise<HistoryItemResponseDto>;
}
