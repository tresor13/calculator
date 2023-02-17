import { Connection } from 'mongoose';
import { HistoryItem } from './schemas/historyItem.schema';

export const historyProviders = [
  {
    provide: 'HISTORY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('HistoryItem', HistoryItem),
    inject: ['DATABASE_CONNECTION'],
  },
];
