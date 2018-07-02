
import { Module } from '@gapi/core';
import { AuthMicroserviceModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@Module({
    imports: [
        CoreModule,
        AuthMicroserviceModule
    ]
})
export class AppModule { }