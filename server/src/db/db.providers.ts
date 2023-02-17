import * as mongoose from 'mongoose';
import 'dotenv/config.js';
import { DATABASE_CONNECTION } from './constants';

type DataBaseProvider = {
  provide: string;
  useFactory: () => Promise<typeof mongoose>;
}[];
export const databaseProviders: DataBaseProvider = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(process.env.DATA_BASE_URI),
  },
];
