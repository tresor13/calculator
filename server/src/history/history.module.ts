import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { HistoryItem, HistoryItemSchema } from './schemas/historyItem.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HistoryItem.name, schema: HistoryItemSchema },
    ]),
  ],
  controllers: [HistoryController],
  providers: [HistoryService],
  exports: [MongooseModule],
})
export class HistoryModule {}
