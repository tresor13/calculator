import { Module } from '@nestjs/common';
import { HistoryModule } from '../history';
import { CalculatorController } from './calculator.controller';
import { CustomCacheModule } from '../cache/cache.module';
import { historyProviders } from '../history';
import { databaseProviders } from '../db';

import {
  CalculatorServiceProvider,
  RegExCreatorServiceProvider,
  ExpressionCounterServiceProvider,
} from './services';
import { CacherServiceProvider } from 'src/cache/services';
import { HistoryServiceProvider } from 'src/history/services';

@Module({
  imports: [HistoryModule, CustomCacheModule],
  controllers: [CalculatorController],
  providers: [
    CalculatorServiceProvider,
    RegExCreatorServiceProvider,
    ExpressionCounterServiceProvider,
    CacherServiceProvider,
    HistoryServiceProvider,
    ...historyProviders,
    ...databaseProviders,
  ],
})
export class CalculatorModule {}
