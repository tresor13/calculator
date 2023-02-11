import { expect, test } from "@jest/globals";
import { exponentialToDecimal } from "../../utils/exponentialToDecimal";

describe("exponentialToDecimal function:", () => {
  test("should return string", () => {
    expect(typeof exponentialToDecimal("2.00e+13")).toBe("string");
    expect(typeof exponentialToDecimal("test")).toBe("string");
  });

  test("should work with negative and positiva values", () => {
    expect(exponentialToDecimal("2.00e+8")).toBe("200000000");
    expect(exponentialToDecimal("2.0e-13")).toBe("0.00000000000020");
  });

  test("should not break with incorrect input", () => {
    expect(exponentialToDecimal("test")).toBe("test");
    expect(exponentialToDecimal("test.0e+8")).toBe("test00000000");
    expect(exponentialToDecimal("test.0e-8")).toBe("0.0000000test0");
    expect(exponentialToDecimal("test.0e-test")).toBe("0.test0");
  });
});
