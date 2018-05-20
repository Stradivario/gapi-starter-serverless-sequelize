
import { GapiModule } from '@gapi/core';
import { GapiSequelizeModule } from '@gapi/sequelize';
import { AuthPrivateService } from './services/auth/auth.service';

@GapiModule({
    imports: [
        GapiSequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST || 'yourenvironemnt.cobu1srvrp5s.us-east-2.rds.amazonaws.com',
            port: process.env.DB_PORT || '5432',
            username: process.env.DB_USERNAME || 'dbuser',
            password: process.env.DB_PASSWORD || 'dbuserpass',
            name: process.env.DB_NAME || 'postgres',
            storage: ':memory:',
            logging: true,
            force: process.env.FORCE_RECREATE ? true : false,
            modelPaths: [process.cwd() + '/src/models']
          }
        ),
    ],
    services: [
        AuthPrivateService
    ]
})
export class CoreModule {}