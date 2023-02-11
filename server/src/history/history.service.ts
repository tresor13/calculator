import { Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { CreateHistoryItemDto } from './dto/create-historyitem.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HistoryItem, HistoryItemDocument } from './schemas/historyItem.schema';

const maxNumberOfDBItemsToDisplay = 10;

@Injectable()
export class HistoryService {
  constructor(
    @InjectModel(HistoryItem.name)
    private historyModel: Model<HistoryItemDocument>,
  ) {}
  async create(dto: CreateHistoryItemDto): Promise<HistoryItem> {
    const historyItem = await this.historyModel.create({ ...dto });
    return historyItem;
  }
  async getAll(): Promise<HistoryItem[]> {
    const allHistoryItems = await this.historyModel.find().sort({ _id: -1 });
    // .limit(maxNumberOfDBItemsToDisplay);

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
