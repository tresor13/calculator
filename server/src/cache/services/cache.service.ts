import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { HistoryItemResponseDto } from 'src/history/dto/history.item.response.dto';
import { ICacheService } from '../interface';

@Injectable()
export class DefaultCacheService implements ICacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async checkInCache(expression: string) {
    const value = await this.cacheManager.get(expression);
    return value;
  }
  async setToCache(cacheData: HistoryItemResponseDto) {
    const { expression, result } = cacheData;
    await this.cacheManager.set(expression, result, 0);
    return cacheData;
  }
}
