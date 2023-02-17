import { CacheModule, DynamicModule, Module } from '@nestjs/common';
import { CacherServiceProvider } from './services';
import {
  CalculatorServiceProvider,
  ExpressionCounterServiceProvider,
  RegExCreatorServiceProvider,
} from 'src/calculator/services';

@Module({})
export class CustomCacheModule {
  static forRoot(): DynamicModule {
    return {
      imports: [CacheModule.register({ isGlobal: true })],
      module: CustomCacheModule,
      providers: [
        CacherServiceProvider,
        CalculatorServiceProvider,
        ExpressionCounterServiceProvider,
        RegExCreatorServiceProvider,
      ],
      exports: [CustomCacheModule],
    };
  }
}
