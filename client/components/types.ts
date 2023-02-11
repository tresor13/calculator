import { ReactElement } from "react";
import {
  NumberEntities,
  OperatorEntities,
  SpecialSymbolEntities,
  NumObject,
  OperatorObject,
  SpecialSymbolObject,
} from "@/configs/types";

export type RenderButtonFunction = (
  entities: NumberEntities | OperatorEntities | SpecialSymbolEntities
) => ReactElement[];

export type OnClickBtnFunction = (
  btnValue: string,
  item: NumObject | OperatorObject | SpecialSymbolObject
) => void;
