export type DefaultApiRequest = {
  expression: string;
  result: string;
};

interface ApiAdded {
  _id: string;
  __v?: string;
}

export type CalculationRequest<T> = (expression: string) => (T & ApiAdded)[];
export type DeleteRequest = (id: string) => void;
export type GetAllRequest<T> = () => (T & ApiAdded)[];

export type ApiMethods = {
  calculateExpression: CalculationRequest<DefaultApiRequest>;
  deleteHistoryItem: DeleteRequest;
  fetchHistory: GetAllRequest<DefaultApiRequest>;
};
