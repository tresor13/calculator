import { Inject, Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { ClientResponseDto } from 'src/calculator/dto/client.response.dto.ts';
import { CreateHistoryItemDto } from '../dto/create.historyitem.dto';
import { HISTORY_MODEL } from '../constants';
import { IHistoryService } from '../interfaces/interface';

import { HistoryItem } from '../interfaces/interface';

@Injectable()
export class DefaultHistoryService implements IHistoryService {
  constructor(
    @Inject(HISTORY_MODEL)
    private historyModel: Model<HistoryItem>,
  ) {}
  async create(dto: CreateHistoryItemDto) {
    const historyItem: ClientResponseDto = await this.historyModel.create({
      ...dto,
    });
    return historyItem;
  }
  async getAll(): Promise<HistoryItem[]> {
    const allHistoryItems = await this.historyModel.find().sort({ _id: -1 });

    return allHistoryItems;
  }
  async getOne(id: ObjectId): Promise<HistoryItem> {
    const historyItem = await this.historyModel.findById(id);
    return historyItem;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const historyItem = await this.historyModel.findByIdAndDelete(id);
    return historyItem.id;
  }
}
