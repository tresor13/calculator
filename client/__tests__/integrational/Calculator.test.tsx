import { Calculator } from "../../components";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

afterEach(cleanup);

it("Calculator component:", () => {
  const CalculatorTest: React.FunctionComponent = () => {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  };

  const { queryAllByTestId } = render(<CalculatorTest />);
  expect(queryAllByTestId("calc-test")).toBeTruthy();
});
