import { Type } from '@nestjs/common';
export type ServiceProviderType<T> = {
    provide: string;
    useClass: Type<T>;
};
