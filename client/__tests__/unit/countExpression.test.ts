import { OperatorRegExp } from "../../configs/types";
import { expect, test, beforeEach } from "@jest/globals";
import { countExpression } from "../../utils/countExpression";

describe("countExpression function:", () => {
  let firstLevelOperators: OperatorRegExp;
  let secondLevelOperators: OperatorRegExp;
  let thirdLevelOperators: OperatorRegExp;

  let testOperators: OperatorRegExp;

  beforeEach(() => {
    thirdLevelOperators = { regExp: "(sin|cos|!)", type: "unary" };
    secondLevelOperators = { regExp: "([*/])", type: "binary" };
    firstLevelOperators = { regExp: "([+-])", type: "binary" };

    testOperators = { regExp: "test", type: "test" };
  });

  test("should work with all correct operators", () => {
    expect(countExpression("sin(0)", thirdLevelOperators)).toBe("0");
    expect(countExpression("2*2/2", secondLevelOperators)).toBe("2");
    expect(countExpression("2+2-1", firstLevelOperators)).toBe("3");
  });

  test("should work with incorrect operators", () => {
    expect(countExpression("2+2", testOperators)).toBe("2+2");
  });

  test("should work with incorrect input", () => {
    expect(countExpression("!(test)", thirdLevelOperators)).toBe("!(test)");
  });
});
