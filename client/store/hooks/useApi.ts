import { defaultApi } from "@/api";
import { ApiMethods } from "@/api/types";

type UseApiHook = () => ApiMethods;

export const useApi: UseApiHook = () => {
  if (process.env.NEXT_PUBLIC_REACT_APP_API === "default") {
    return defaultApi;
  } else {
    throw new Error("API was not found!");
  }
};
