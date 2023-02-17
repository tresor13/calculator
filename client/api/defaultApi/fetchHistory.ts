import { api } from "..";
import { client } from "../client";

export const fetchHistory: typeof api.fetchHistory = () =>
  client.GET("/history");
