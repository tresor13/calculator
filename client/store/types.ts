export interface HistoryItem {
  expression: string;
  result: string;
  _id: string;
  __v?: string;
}

interface CalculatorHistoryState {
  history: Array<HistoryItem>;
  inputValue: string;
  fetchError: string | null;
  status: "loading" | "idle";
}

enum HistoryActionTypes {
  ADD = "ADD",
  BACK_TO_INPUT = "BACK_TO_INPUT",
  DELETE = "DELETE",
}

interface AddAction {
  type: HistoryActionTypes.ADD;
  payload: HistoryItem;
}

interface DeleteAction {
  type: HistoryActionTypes.DELETE;
  payload: string;
}

type HistoryAction = AddAction | DeleteAction;

export type { CalculatorHistoryState, HistoryAction };
export { HistoryActionTypes };
