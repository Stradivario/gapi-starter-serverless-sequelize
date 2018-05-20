import { OfType, GapiEffect } from '@gapi/core';
import { EffectTypes } from '../core/api-introspection/EffectTypes';

@GapiEffect()
export class UserEffect {
    @OfType<EffectTypes>(EffectTypes.login)
    findUser(result, payload, context) {
        // this.pubSub.publish('Hello World', {myData: ''});
        // console.log(result, payload, context);
    }

}