import 'dotenv/config.js';
import { ServiceProviderType } from 'src/types';
import { ICacheService, CACHE_SERVICE } from '../interface';
import { DefaultCacheService } from './cache.service';

const cacheEnv = process.env.APP_CACHE ? process.env.APP_CACHE : 'default';

export const CacherServiceProvider: ServiceProviderType<ICacheService> = {
  provide: CACHE_SERVICE,
  useClass: cacheEnv === 'default' ? DefaultCacheService : DefaultCacheService,
};
