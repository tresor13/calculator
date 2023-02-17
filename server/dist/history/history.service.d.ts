import { Model, ObjectId } from 'mongoose';
import { ClientResponseDto } from 'src/calculator/dto/client.response.dto.ts';
import { CreateHistoryItemDto } from './dto/create-historyitem.dto';
import { HistoryServiceInterface } from './interfaces/interface';
import { HistoryItem } from './interfaces/interface';
export declare class HistoryService implements HistoryServiceInterface {
    private historyModel;
    constructor(historyModel: Model<HistoryItem>);
    create(dto: CreateHistoryItemDto): Promise<ClientResponseDto>;
    getAll(): Promise<HistoryItem[]>;
    getOne(id: ObjectId): Promise<HistoryItem>;
    delete(id: ObjectId): Promise<ObjectId>;
}
