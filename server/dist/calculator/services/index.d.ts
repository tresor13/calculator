import 'dotenv/config.js';
import { ICalculatorService, IExpressionCounterService, IRegExCreatorService } from '../interfaces/calculator.services.interfaces';
import { ServiceProviderType } from '../../types';
export declare const CalculatorServiceProvider: ServiceProviderType<ICalculatorService>;
export declare const RegExCreatorServiceProvider: ServiceProviderType<IRegExCreatorService>;
export declare const ExpressionCounterServiceProvider: ServiceProviderType<IExpressionCounterService>;
