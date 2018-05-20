
function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
export const EffectTypes = strEnum(['login',
'findUser',
'subscribeToUserMessagesBasic',
'subscribeToUserMessagesWithFilter',
'destroyUser',
'updateUser',
'addUser',
'publishSignal']);
export type EffectTypes = keyof typeof EffectTypes;
