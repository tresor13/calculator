import { expect, test } from "@jest/globals";
import { createRegExps } from "../../utils/createRegExps";

describe("createRegExps function:", () => {
  test("should return object of RegExps", () => {
    expect(typeof createRegExps()).toBe("object");

    expect(createRegExps()).toHaveProperty("exponentialRegEx");
    expect(createRegExps()).toHaveProperty("expressionWithBracketsRegEx");
    expect(createRegExps()).toHaveProperty("noBracketsExpressionRegEx");

    expect(createRegExps().exponentialRegEx).toBeInstanceOf(RegExp);
    expect(createRegExps().expressionWithBracketsRegEx).toBeInstanceOf(RegExp);
    expect(createRegExps().noBracketsExpressionRegEx).toBeInstanceOf(RegExp);
  });
});
