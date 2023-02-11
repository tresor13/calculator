import { NumberEntities } from "./types";

const onClick = (buttonValue: string, expression: string): string => {
  const newExpression =
    expression === "0" ? buttonValue : `${expression}${buttonValue}`;
  return newExpression;
};

const defaultStyle = "btn btn-outline-info";

const numEntities: NumberEntities = {
  0: {
    textForInput: 0,
    className: "zero btn btn-outline-secondary",
    innerHtml: "0",
    onClick,
  },
  1: { textForInput: 1, className: defaultStyle, innerHtml: "1", onClick },
  2: { textForInput: 2, className: defaultStyle, innerHtml: "2", onClick },
  3: { textForInput: 3, className: defaultStyle, innerHtml: "3", onClick },
  4: { textForInput: 4, className: defaultStyle, innerHtml: "4", onClick },
  5: { textForInput: 5, className: defaultStyle, innerHtml: "5", onClick },
  6: { textForInput: 6, className: defaultStyle, innerHtml: "6", onClick },
  7: { textForInput: 7, className: defaultStyle, innerHtml: "7", onClick },
  8: { textForInput: 8, className: defaultStyle, innerHtml: "8", onClick },
  9: { textForInput: 9, className: defaultStyle, innerHtml: "9", onClick },
};

export { numEntities };
