export interface NumObject {
  textForInput: number;
  innerHtml: string;
  className: string;
  onClick: Function;
}

export type NumberEntities = Record<number, NumObject>;

export interface OperatorObject {
  textForInput: string;
  onClick: (button: string, expression: string) => string;
  innerHtml: string;
  className: string;
  type: string;
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
  entities: OperatorEntities
) => Array<OperatorRegExp>;
