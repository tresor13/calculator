import 'dotenv/config.js';
import { ServiceProviderType } from 'src/types';

import { HISTORY_SERVICE } from '../constants';
import { IHistoryService } from '../interfaces/interface';
import { DefaultHistoryService } from './history.service';

const dbEnv = process.env.APP_DB ? process.env.APP_DB : 'mongo';

export const HistoryServiceProvider: ServiceProviderType<IHistoryService> = {
  provide: HISTORY_SERVICE,
  useClass: dbEnv === 'mongo' ? DefaultHistoryService : DefaultHistoryService,
};
