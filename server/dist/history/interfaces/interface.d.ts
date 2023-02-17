import { ObjectId } from 'mongoose';
import { CreateHistoryItemDto } from '../dto/create.historyitem.dto';
import { Document } from 'mongoose';
import { ClientResponseDto } from 'src/calculator/dto/client.response.dto.ts';
export interface HistoryItem extends Document {
    readonly expression: string;
    readonly result: string;
}
export interface IHistoryService {
    create(dto: CreateHistoryItemDto): Promise<ClientResponseDto>;
    getAll(): Promise<HistoryItem[]>;
    getOne(id: ObjectId): Promise<HistoryItem>;
    delete(id: ObjectId): Promise<ObjectId>;
}
