import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HistoryModule } from './history';
import { CalculatorModule } from './calculator';
import { DBModule } from './db';
import { CustomCacheModule } from './cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CustomCacheModule.forRoot(),
    DBModule,
    HistoryModule,
    CalculatorModule,
  ],
})
export class AppModule {}
