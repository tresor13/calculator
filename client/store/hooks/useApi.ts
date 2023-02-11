import { defaultApi } from "@/api";
import {
  CalculationRequest,
  DeleteRequest,
  GetAllRequest,
  HistoryItem,
} from "@/api/types";

export type ApiMethods = {
  calculateExpression: CalculationRequest<HistoryItem>;
  deleteHistoryItem: DeleteRequest;
  fetchHistory: GetAllRequest<HistoryItem>;
};

type UseApiHook = () => ApiMethods;

export const useApi: UseApiHook = () => {
  if (process.env.NEXT_PUBLIC_REACT_APP_API === "default") {
    return defaultApi;
  } else {
    throw new Error("API was not found!");
  }
};
