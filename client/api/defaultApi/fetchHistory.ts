import { client } from "../client";
import { GetAllRequest, HistoryItem } from "../types";

export const fetchHistory: GetAllRequest<HistoryItem> = () =>
  client.GET("/history");
