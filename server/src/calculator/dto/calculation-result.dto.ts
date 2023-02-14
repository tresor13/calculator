import { HistoryItem } from 'src/history/schemas/historyItem.schema';

export class CalculationResultDto extends HistoryItem {
  readonly expression: string;
  readonly result: string;
  readonly _id: string;
  readonly _v: number;
}
