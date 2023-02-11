export type HistoryItem = {
  expression: string;
  result: string;
};

export type CalculationRequest<T> = (expression: string) => T[];
export type DeleteRequest = (id: string) => void;
export type GetAllRequest<T> = () => T[];
