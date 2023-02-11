import { SpecialSymbolEntities } from "./types";

const onClick = (buttonValue: string, expression: string): string => {
  const newExpression =
    expression === "0" ? buttonValue : `${expression}${buttonValue}`;
  return newExpression;
};

const specSymbolEntities: SpecialSymbolEntities = {
  clear: {
    textForInput: "clear",
    innerHtml: "C",
    className: "clear btn btn-outline-warning",
    onClick: () => "0",
  },
  back: {
    textForInput: "back",
    innerHtml: "←",
    className: "back btn btn-outline-warning",
    onClick: (_button, expression) => {
      if (expression.length > 1) {
        const newExpression = expression.slice(0, -1);
        return newExpression;
      }
      return "0";
    },
  },
  "(": {
    textForInput: "(",
    innerHtml: "(",
    className: "lbrecket btn btn-outline-primary",
    onClick,
  },
  ")": {
    textForInput: ")",
    innerHtml: ")",
    className: "rbrecket btn btn-outline-primary",
    onClick,
  },
  ".": {
    textForInput: ".",
    innerHtml: ".",
    className: "dot btn btn-outline-primary",
    onClick: (buttonValue, expression) => `${expression}${buttonValue}`,
  },
};

export { specSymbolEntities };
