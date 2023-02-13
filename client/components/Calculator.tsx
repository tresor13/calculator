import { useMemo } from "react";

import { numEntities, operatorEntities, specSymbolEntities } from "../configs";
import { RenderButtonFunction, OnClickBtnFunction } from "./types";
import { useAppDispatch } from "../store/store";
import { useActions, useTypedSelector } from "../store/hooks";
import { StateItem } from "@/store/types";
import { asyncActions } from "@/store/slices/CalculatorHistorySlice";

const Calculator: React.FunctionComponent = () => {
  const { inputValue } = useTypedSelector((state) => state.history);
  const { setItemToInput, addItemToState } = useActions();
  const { calculateExpression } = asyncActions;

  const dispatch = useAppDispatch();

  const onClickButton: OnClickBtnFunction = (btnValue, item) => {
    const newInputValue = item.onClick(btnValue, inputValue);

    if (item.innerHtml === "=") {
      dispatch(calculateExpression(inputValue)).then((data) => {
        const payload = data.payload as any as StateItem;
        addItemToState(payload);
        const { result } = payload;
        setItemToInput(result);
      });
    } else {
      setItemToInput(newInputValue);
    }
  };

  const renderButtons: RenderButtonFunction = (entities) => {
    const arrayOfButtons = Object.values(entities).map((item) => {
      return (
        <button
          key={item.innerHtml}
          value={item.textForInput}
          type="button"
          className={item.className}
          onClick={(e) => {
            const btnValue = e.currentTarget.value;
            onClickButton(btnValue, item);
          }}
        >
          {item.innerHtml}
        </button>
      );
    });

    return arrayOfButtons;
  };

  const numbers = useMemo(
    () => renderButtons(numEntities),
    [numEntities, inputValue]
  );
  const operators = useMemo(
    () => renderButtons(operatorEntities),
    [operatorEntities, inputValue]
  );
  const specSymbols = useMemo(
    () => renderButtons(specSymbolEntities),
    [specSymbolEntities, inputValue]
  );

  return (
    <>
      <div className="calculator card border border-dark">
        <input
          id="calc-test"
          className="input"
          value={inputValue}
          onChange={(e) => setItemToInput(e.currentTarget.value)}
        ></input>

        {numbers.map((button) => button)}

        {operators.map((button) => button)}

        {specSymbols.map((button) => button)}
      </div>
    </>
  );
};

export { Calculator };
