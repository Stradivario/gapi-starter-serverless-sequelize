import { Controller, Type, Query, GraphQLNonNull, Public, GraphQLString } from '@gapi/core';
import { AuthService } from '../core/services/auth/auth.service';
import { UserTokenType } from './auth.type';

@Controller()
export class AuthQueriesController {

    constructor(
        private authService: AuthService
    ) { }

    @Type(UserTokenType)
    @Public()
    @Query({
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
    login(root, { email, password }, context) {
        let credential: any;
        // Find user from database
        const user = <any>{
            id: 1,
            username: email,
            type: 'ADMIN',
            settings: {
                sidebar: true,
                language: 'FR'
            },
            password: this.authService.encryptPassword(password),
            name: 'Test Testov'
        };

        if (this.authService.decryptPassword(user.password) === password) {
            credential = {
                user: user,
                token: this.authService.signJWTtoken({
                    email: user.email,
                    id: user.id,
                    scope: [user.type]
                })
            };
        } else {
            throw new Error('missing-username-or-password');
        }
        return credential;
    }

}