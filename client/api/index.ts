import { calculateExpression } from "./defaultApi";
import { deleteHistoryItem } from "./defaultApi";
import { fetchHistory } from "./defaultApi";
import { ApiMethods } from "./types";

const apiMap: Record<string, ApiMethods> = {
  default: {
    calculateExpression,
    deleteHistoryItem,
    fetchHistory,
  },
};

const environment = process.env.NEXT_PUBLIC_REACT_APP_API
  ? process.env.NEXT_PUBLIC_REACT_APP_API
  : "default";

export const api: ApiMethods = apiMap[environment];
