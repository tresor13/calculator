import { client } from "../client";
import { CalculationRequest, HistoryItem } from "../types";

export const calculateExpression: CalculationRequest<HistoryItem> = (
  payload: string
) => client.GET(`/calculator/?expression=${encodeURIComponent(payload)}`);
