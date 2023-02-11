import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../slices/CalculatorHistorySlice";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export { useActions };
