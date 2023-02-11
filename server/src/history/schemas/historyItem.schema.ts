import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type HistoryItemDocument = HistoryItem & Document;

@Schema()
export class HistoryItem {
  @Prop()
  expression: string;

  @Prop()
  result: string;
}

export const HistoryItemSchema = SchemaFactory.createForClass(HistoryItem);
