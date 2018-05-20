import {
    Query, GraphQLNonNull, Type,
    GapiController, GraphQLInt, Public
} from '@gapi/core';
import { UserService } from './services/user.service';
import { UserType } from './types/user.type';
import { User } from '../../models/User';

@GapiController()
export class UserQueriesController {

    constructor(
        private userService: UserService
    ) {}

    @Type(UserType)
    @Public()
    @Query({
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    })
    findUser(root, { id }, context): PromiseLike<User>  {
        return this.userService.findUser(id);
    }


}




