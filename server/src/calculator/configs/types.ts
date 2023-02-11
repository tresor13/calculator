export interface NumObject {
  textForInput: number;
  innerHtml: string;
  className: string;
  onClick: Function;
}

export type NumberEntities = Record<number, NumObject>;

// type UnaryOperatorCount = (operand1: number) => number | null;

// type BinaryOperatorCount = (
//   operand1: number,
//   operand2: number
// ) => number | null;

export interface OperatorObject {
  regExpSymbol: string;
  type: string;
  count: (operand1: number, operand2?: number) => number | null;
  level: number | null;
}

export type OperatorEntities = Record<string, OperatorObject>;

export interface SpecialSymbolObject {
  textForInput: string;
  innerHtml: string;
  className: string;
  onClick: (button: string, inputValue: string) => string;
}

export type SpecialSymbolEntities = Record<string, SpecialSymbolObject>;

export interface Parentheses {
  opened: Array<string>;
  closed: Array<string>;
}

export interface OperatorRegExp {
  regExp: string;
  type: string;
}

export type MakeOperatorsRegEx = (
  entities: OperatorEntities,
) => Array<OperatorRegExp>;
