import { getResult } from "../../utils/getResult";
import { expect, test } from "@jest/globals";

describe("getResult function:", () => {
  test("should return correct result of simple expression", () => {
    expect(getResult("2+2")).toBe("4");
    expect(getResult("2-2")).toBe("0");
    expect(getResult("2*3")).toBe("6");
    expect(getResult("2/2")).toBe("1");
    expect(getResult("0/8")).toBe("0");
    expect(getResult("-10")).toBe("-10");
    expect(getResult("8/0")).toBe("Infinity");
  });

  test("should return correct result of complex expresion", () => {
    expect(getResult("2+2/2")).toBe("3");
    expect(getResult("2*2/8*10")).toBe("5");
  });

  test("should return correct result of expression with brackets", () => {
    expect(getResult("((2+2)/-2)+4*(-3/-1)")).toBe("10");
    expect(getResult("{22/-2)+(11*2]")).toBe("11");
  });

  test("should work with floating values correctly", () => {
    expect(Number(getResult("0.1*0.2"))).toBeCloseTo(0.02);
    expect(Number(getResult("14900*(10.8/100)"))).toBeCloseTo(1609.2);
  });

  test("should return exponential value", () => {
    expect(getResult("0.2/1000000")).toBe("2.00e-7");
    expect(getResult("200*100000000000")).toBe("2.00e+13");
  });

  test("should return correct result of expressions with whitespaces", () => {
    expect(getResult("2/     2")).toBe("1");
  });

  test("should return NaN", () => {
    expect(getResult("2/lol")).toBe("NaN");
    expect(getResult("-+")).toBe("NaN");
  });
});
