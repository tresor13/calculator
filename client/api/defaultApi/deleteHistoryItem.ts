import { api } from "..";
import { client } from "../client";

export const deleteHistoryItem: typeof api.deleteHistoryItem = (
  payload: string
) => client.DELETE(`/history/${payload}`);
