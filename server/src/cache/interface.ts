import { HistoryItemResponseDto } from 'src/history/dto/history.item.response.dto';

export const CACHE_SERVICE = 'CACHE_SERVICE';

export interface ICacheService {
  checkInCache(expression: string): Promise<unknown | string>;
  setToCache(
    cacheData: HistoryItemResponseDto,
  ): Promise<HistoryItemResponseDto>;
}
