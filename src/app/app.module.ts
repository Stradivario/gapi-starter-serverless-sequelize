
import { GapiModule } from '@gapi/core';
import { AuthMicroserviceModule } from './auth/auth.module';
import { UserMicroserviceModule } from './user/user.module';
import { CoreModule } from './core/core.module';

@GapiModule({
    imports: [
        CoreModule,
        AuthMicroserviceModule,
        UserMicroserviceModule
    ]
})
export class AppModule { }