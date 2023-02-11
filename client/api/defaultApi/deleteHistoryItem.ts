import { client } from "../client";
import { DeleteRequest } from "../types";

export const deleteHistoryItem: DeleteRequest = (payload: string) =>
  client.DELETE(`/history/${payload}`);
