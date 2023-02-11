import { useEffect } from "react";

import { useTypedSelector } from "../store/hooks";
import { useAppDispatch } from "../store/store";
import { ListItem } from "./ListItem";
import { HistoryItem } from "../store/types";
import { asyncActions } from "@/store/slices/CalculatorHistorySlice";

const History: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { fetchHistory } = asyncActions;

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  const { history } = useTypedSelector((state) => state.history);

  return (
    <div className="history-container">
      <ul className="list-group">
        {[...history].map((item: HistoryItem) => {
          console.log(item);
          return <ListItem key={item._id} {...item} />;
        })}
      </ul>
    </div>
  );
};

export { History };
