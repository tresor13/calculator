import { Module } from '@nestjs/common';
import { CacheService } from 'src/cache/cache.service';
import { HistoryModule } from 'src/history/history.module';
import { HistoryService } from 'src/history/history.service';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';
import { ExpressionCounterService } from './expression.counter.service';
import { RegExCreatorService } from './regex.creator.service';
@Module({
  imports: [HistoryModule],
  controllers: [CalculatorController],
  providers: [
    CalculatorService,
    ExpressionCounterService,
    RegExCreatorService,
    CacheService,
    HistoryService,
  ],
})
export class CalculatorModule {}
