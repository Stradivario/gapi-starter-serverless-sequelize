
import { GapiModule } from '@gapi/core';
import { CoreModule } from './core/core.module';
import { GapiMicroserviceModule } from '@gapi/microservices';

@GapiModule({
    imports: [
        CoreModule,
        GapiMicroserviceModule.forRoot([
            {
                name: 'auth-microservice',
                link: `${process.env.AWS_CLOUD_LINK}/auth/graphql`
            },
            {
                name: 'user-microservice',
                link: `${process.env.AWS_CLOUD_LINK}/user/graphql`
            }
        ])
    ]
})
export class AppProxyModule { }