import { HistoryItem } from "../store";
type Method = Uppercase<"get"> | Uppercase<"post"> | Uppercase<"delete">;

type AddRequestObject = {
  expression: string;
} | null;

type MethodFunction = (
  url: string,
  data?: string | AddRequestObject
) => HistoryItem[];

type Client = {
  [K in Method]: MethodFunction;
};
const createClient = (): Client => {
  const methods: Method[] = ["GET", "POST", "DELETE"];
  return methods.reduce(
    (result: Client, method: Method) => ({
      ...result,
      [method]: (url: string, data?: string | AddRequestObject) =>
        fetch(`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}${url}`, {
          headers: {
            "Content-Type": "application/json",
          },
          method,
          body: data ? JSON.stringify(data) : null,
        }).then((response: Response) => response.json()),
    }),
    {} as Client
  );
};

export const client = createClient();
