import { Cache } from 'cache-manager';
import { HistoryItemResponseDto } from 'src/history/dto/history.item.response.dto';
import { ICacheService } from '../interface';
export declare class DefaultCacheService implements ICacheService {
    private cacheManager;
    constructor(cacheManager: Cache);
    checkInCache(expression: string): Promise<unknown>;
    setToCache(cacheData: HistoryItemResponseDto): Promise<HistoryItemResponseDto>;
}
