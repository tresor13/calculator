import { expect, test } from "@jest/globals";
import { parseExprForMathEntities } from "../../utils/parseExprForMathEntities";

describe("parseExprForMathEntities function:", () => {
  const binaryOperatorRegExp = /(-?\d+(?:\.\d+)?)\s*([*/])\s*(-?\d+(?:\.\d+)?)/;
  const unaryOperatorRegExp = /(sin|cos|!)[(]?\s*(-?\d+(?:\.\d+)?)[)]?/;

  const testRegExp = /[test]/;

  test("should return array", () => {
    expect(
      Array.isArray(parseExprForMathEntities("2*2", binaryOperatorRegExp))
    ).toBeTruthy();

    expect(
      Array.isArray(parseExprForMathEntities("test", testRegExp))
    ).toBeTruthy();
  });

  test("should return array with at least 2 values when operator is unary type", () => {
    expect(
      parseExprForMathEntities("sin(45)", unaryOperatorRegExp).length >= 2
    ).toBeTruthy();
  });

  test("should return array with at least 3 values when operator is unary type", () => {
    expect(
      parseExprForMathEntities("2*4", binaryOperatorRegExp).length >= 3
    ).toBeTruthy();
  });

  test("should parse input string correctly", () => {
    const [number1, binaryOperator, number2] = parseExprForMathEntities(
      "2*4",
      binaryOperatorRegExp
    );
    expect(number1).toBe("2");
    expect(number2).toBe("4");
    expect(binaryOperator).toBe("*");

    const [unaryOperator, number] = parseExprForMathEntities(
      "sin(45)",
      unaryOperatorRegExp
    );
    expect(number).toBe("45"), expect(unaryOperator).toBe("sin");
  });
});
