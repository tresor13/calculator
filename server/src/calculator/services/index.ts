import 'dotenv/config.js';

import { DefaultCalculatorService } from './calculator.service';
import { DefaultRegExCreatorService } from './regex.creator.service';
import { DefaultExpressionCounterService } from './expression.counter.service';

import {
  ICalculatorService,
  IExpressionCounterService,
  IRegExCreatorService,
} from '../interfaces/calculator.services.interfaces';
import {
  CALCULATOR_SERVICE,
  EXPRESSION_COUNTER_SERVICE,
  REGEXP_CREATOR_SERVICE,
} from '../constants';

import { ServiceProviderType } from '../../types';

const calculatorEnv = process.env.APP_CALCULATOR
  ? process.env.APP_CALCULATOR
  : 'default';

export const CalculatorServiceProvider: ServiceProviderType<ICalculatorService> =
  {
    provide: CALCULATOR_SERVICE,
    useClass:
      calculatorEnv === 'default'
        ? DefaultCalculatorService
        : DefaultCalculatorService,
  };
export const RegExCreatorServiceProvider: ServiceProviderType<IRegExCreatorService> =
  {
    provide: REGEXP_CREATOR_SERVICE,
    useClass:
      calculatorEnv === 'default'
        ? DefaultRegExCreatorService
        : DefaultRegExCreatorService,
  };
export const ExpressionCounterServiceProvider: ServiceProviderType<IExpressionCounterService> =
  {
    provide: EXPRESSION_COUNTER_SERVICE,
    useClass:
      calculatorEnv === 'default'
        ? DefaultExpressionCounterService
        : DefaultExpressionCounterService,
  };
