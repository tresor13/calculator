import { Model, ObjectId } from 'mongoose';
import { CreateHistoryItemDto } from './dto/create-historyitem.dto';
import { HistoryItem, HistoryItemDocument } from './schemas/historyItem.schema';
export declare class HistoryService {
    private historyModel;
    constructor(historyModel: Model<HistoryItemDocument>);
    create(dto: CreateHistoryItemDto): Promise<HistoryItem>;
    getAll(): Promise<HistoryItem[]>;
    getOne(id: ObjectId): Promise<HistoryItem>;
    delete(id: ObjectId): Promise<ObjectId>;
}
