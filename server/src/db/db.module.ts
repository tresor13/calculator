import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// @Module({
//   imports: [
//     MongooseModule.forRoot(
//       `mongodb+srv://admin:admin@cluster0.yg3hknt.mongodb.net/calculator?retryWrites=true&w=majority`,
//     ),
//   ],
// })
// export class DBModule {}
@Module({})
export class DBModule {
  static forRoot(): DynamicModule {
    return {
      imports: [MongooseModule.forRoot(process.env.DATA_BASE_URI)],
      module: DBModule,
    };
  }
}
