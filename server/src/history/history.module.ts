import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { DBModule } from '../db';
import { historyProviders } from './history.providers';
import { HistoryServiceProvider } from './services';

@Module({
  imports: [DBModule],
  controllers: [HistoryController],
  providers: [HistoryServiceProvider, ...historyProviders],
})
export class HistoryModule {}
