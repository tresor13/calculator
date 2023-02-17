import * as mongoose from 'mongoose';
import 'dotenv/config.js';
type DataBaseProvider = {
    provide: string;
    useFactory: () => Promise<typeof mongoose>;
}[];
export declare const databaseProviders: DataBaseProvider;
export {};
