import { Bootstrap } from '@gapi/core';
import { format } from 'url';
import { UserMicroserviceModule } from './user.module';
const App = Bootstrap(UserMicroserviceModule);
export const handler = async (event, context, callback) => {
    const app = await App;
    let url = format({
        pathname: event.path,
        query: event.queryStringParameters
    });
    url = url.replace('user/', '');
    const options = {
        method: event.httpMethod,
        url,
        payload: event.body,
        headers: event.headers,
        validate: false
    };
    let res = {
        statusCode: 502,
        result: null
    };
    try {
        res = await app.server.inject(options);
    } catch (e) {
        console.error('ERROR', JSON.stringify(e));
    }
    const headers = Object.assign({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT'
    });
    return {
        statusCode: res.statusCode,
        body: res.result,
        headers
    };
};