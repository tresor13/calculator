import { useActions, useApi } from "../store/hooks";
import { StateItem } from "../store/types";
import { useAppDispatch } from "../store/store";
import { asyncActions } from "@/store/slices/CalculatorHistorySlice";

export const ListItem: React.FunctionComponent<StateItem> = (props) => {
  const { removeFromState, setItemToInput } = useActions();
  const dispatch = useAppDispatch();
  const { deleteHistoryItem } = asyncActions;

  return (
    <li
      className="list-group-item list-group-item-action d-flex justify-content-between"
      aria-current="true"
      onClick={() => setItemToInput(props.expression)}
    >
      {props.expression} = {props.result}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={(e) => {
          e.stopPropagation();

          dispatch(deleteHistoryItem(props._id)).then(() => {
            removeFromState(props._id);
          });
        }}
      ></button>
    </li>
  );
};
