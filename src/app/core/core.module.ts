
import { Module } from '@gapi/core';
import { SequelizeModule } from '@gapi/sequelize';
import { AuthService } from './services/auth/auth.service';
import { AuthModule } from '@gapi/auth';
import { readFileSync } from 'fs';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST || 'yourenvironemnt.cobu1srvrp5s.us-east-2.rds.amazonaws.com',
            port: process.env.DB_PORT || '5432',
            username: process.env.DB_USERNAME || 'dbuser',
            password: process.env.DB_PASSWORD || 'dbuserpass',
            name: process.env.DB_NAME || 'postgres',
            storage: ':memory:',
            logging: true,
            force: true,
            modelPaths: [process.cwd() + 'src/models']
          }
        ),
        AuthModule.forRoot({
            algorithm: 'HS256',
            cert: readFileSync('./cert.key'),
            cyper: {
                algorithm: 'aes256',
                iv: 'Jkyt1H3FA8JK9L3B',
                privateKey: '8zTVzr3p53VC12jHV54rIYu2545x47lA'
            }
        }),
    ],
    services: [
        AuthService
    ]
})
export class CoreModule {}