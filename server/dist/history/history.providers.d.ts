import { Connection } from 'mongoose';
export declare const historyProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        expression?: string;
        result?: string;
    }, {}, {}, {}, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        expression?: string;
        result?: string;
    }>>;
    inject: string[];
}[];
