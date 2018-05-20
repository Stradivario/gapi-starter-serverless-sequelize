
import { GapiModule, ConfigService, Container } from '@gapi/core';
import { UserQueriesController } from './user-queries.controller';
import { UserSubscriptionsController } from './user-subscriptions.controller';
import { UserMutationsController } from './user-mutations.controller';
import { UserService } from './services/user.service';
import { AnotherService } from './services/another.service';
import { UserEffect } from './user.effect';
import { CoreModule } from '../core/core.module';

@GapiModule({
    imports: [CoreModule],
    controllers: [
        UserQueriesController,
        UserSubscriptionsController,
        UserMutationsController
    ],
    services: [
        UserService,
        AnotherService,
        ConfigService.forRoot({
            APP_CONFIG: {
                ...Container.get(ConfigService).APP_CONFIG,
                port: process.env.NODE_ENV === 'production' ? process.env.API_PORT : null
            }
        }),
    ],
    effects: [
        UserEffect
    ]
})
export class UserMicroserviceModule {}
