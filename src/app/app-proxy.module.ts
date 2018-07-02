
import { Module } from '@gapi/core';
import { CoreModule } from './core/core.module';
import { MicroserviceModule } from '@gapi/microservices';

@Module({
    imports: [
        CoreModule,
        MicroserviceModule.forRoot([
            {
                name: 'auth-microservice',
                link: `${process.env.AWS_CLOUD_LINK}/auth/graphql`
            }
        ])
    ]
})
export class AppProxyModule { }