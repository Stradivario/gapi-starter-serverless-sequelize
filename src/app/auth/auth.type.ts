
import { GapiObjectType, GraphQLScalarType, GraphQLString, InjectType, GraphQLInt, GraphQLBoolean } from '@gapi/core';

@GapiObjectType()
export class UserSettings {
    readonly sidebar: string | GraphQLScalarType = GraphQLBoolean;
    readonly language: string | GraphQLScalarType = GraphQLString;
}

@GapiObjectType()
export class UserType {
    readonly id: number | GraphQLScalarType = GraphQLInt;
    readonly username: string | GraphQLScalarType = GraphQLString;
    readonly type: string | GraphQLScalarType = GraphQLString;
    readonly settings: UserSettings = InjectType(UserSettings);
}

@GapiObjectType()
export class UserTokenType {
    readonly token: string | GraphQLScalarType = GraphQLString;
    readonly user: UserType = InjectType(UserType);
}