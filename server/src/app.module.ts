import { CacheModule, Module } from '@nestjs/common';

import { HistoryModule } from './history/history.module';
import { CalculatorModule } from './calculator/calculator.module';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    DBModule.forRoot(),
    HistoryModule,
    CalculatorModule,
  ],
})
export class AppModule {}
