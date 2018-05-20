import { GapiModule, ConfigService, Container } from '@gapi/core';
import { AuthQueriesController } from './auth.queries.controller';
import { CoreModule } from '../core/core.module';

@GapiModule({
    imports: [CoreModule],
    controllers: [AuthQueriesController],
    services: [
        ConfigService.forRoot({
            APP_CONFIG: {
                ...Container.get(ConfigService).APP_CONFIG,
                port: process.env.NODE_ENV === 'production' ? process.env.API_PORT : null
            }
        }),
    ]
})
export class AuthMicroserviceModule {}