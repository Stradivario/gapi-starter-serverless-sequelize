import { Module } from '@gapi/core';
import { AuthQueriesController } from './auth.queries.controller';
import { CoreModule } from '../core/core.module';

@Module({
    imports: [CoreModule],
    controllers: [AuthQueriesController],
})
export class AuthMicroserviceModule {}