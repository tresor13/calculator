import { UNARY_OPERATOR_TYPE, BINARY_OPERATOR_TYPE } from "./constants";
import { OperatorEntities } from "./types";

const onClick = (buttonValue: string, expression: string): string => {
  if (
    operatorEntities[buttonValue].type === UNARY_OPERATOR_TYPE &&
    expression === "0"
  ) {
    return `${buttonValue}(`;
  }
  if (operatorEntities[buttonValue].type === UNARY_OPERATOR_TYPE) {
    return `${expression}${buttonValue}(`;
  }
  return `${expression}${buttonValue}`;
};

export const operatorEntities: OperatorEntities = {
  sin: {
    textForInput: "sin",
    onClick,
    innerHtml: "sin",
    className: "sinus btn btn-outline-primary",
    type: UNARY_OPERATOR_TYPE,
  },
  cos: {
    textForInput: "cos",
    onClick,
    innerHtml: "cos",
    className: "sinus btn btn-outline-primary",
    type: UNARY_OPERATOR_TYPE,
  },
  "!": {
    textForInput: "!",
    onClick,
    innerHtml: "!n",
    className: "factorial btn btn-outline-primary",
    type: UNARY_OPERATOR_TYPE,
  },
  "+": {
    textForInput: "+",
    onClick,
    innerHtml: "+",
    className: " plus btn btn-outline-primary",
    type: BINARY_OPERATOR_TYPE,
  },
  "-": {
    textForInput: "-",
    onClick,
    innerHtml: "-",
    className: "minus btn btn-outline-primary",
    type: BINARY_OPERATOR_TYPE,
  },
  "*": {
    textForInput: "*",
    onClick,
    innerHtml: "×",
    className: "multiply btn btn-outline-primary",
    type: BINARY_OPERATOR_TYPE,
  },
  "/": {
    textForInput: "/",
    onClick,
    innerHtml: "÷",
    className: "divide btn btn-outline-primary",
    type: BINARY_OPERATOR_TYPE,
  },
  "=": {
    textForInput: "=",
    onClick: (_button, _expression) => {
      return "null";
    },
    innerHtml: "=",
    className: "equal btn btn-outline-success",
    type: "",
  },
};
