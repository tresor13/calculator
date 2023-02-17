import { api } from "..";
import { client } from "../client";

export const calculateExpression: typeof api.calculateExpression = (
  payload: string
) => client.GET(`/calculator/?expression=${encodeURIComponent(payload)}`);
