import { Module } from '@nestjs/common';
import { CacheService } from '../cache';
import { CACHE_SERVICE } from '../cache';
import { HistoryModule } from '../history';
import { HistoryService } from '../history';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';
import {
  CALCULATOR_SERVICE,
  EXPRESSION_COUNTER_SERVICE,
  REGEXP_CREATOR_SERVICE_INTERFACE,
} from './interfaces/constants';
import { ExpressionCounterService } from './expression.counter.service';
import { RegExCreatorService } from './regex.creator.service';
import { HISTORY_SERVICE } from '../history';

@Module({
  imports: [HistoryModule],
  controllers: [CalculatorController],
  providers: [
    { useClass: CalculatorService, provide: CALCULATOR_SERVICE },
    { useClass: ExpressionCounterService, provide: EXPRESSION_COUNTER_SERVICE },
    {
      useClass: RegExCreatorService,
      provide: REGEXP_CREATOR_SERVICE_INTERFACE,
    },
    { useClass: CacheService, provide: CACHE_SERVICE },
    { useClass: HistoryService, provide: HISTORY_SERVICE },
  ],
})
export class CalculatorModule {}
