import { BootstrapFramework, Container, HAPI_SERVER } from '@gapi/core';
import { format } from 'url';
import { Server } from 'hapi';
import { FrameworkImports } from '../../framework-imports';
import { AuthMicroserviceModule } from './auth.module';

const App = BootstrapFramework(AuthMicroserviceModule, [FrameworkImports], { init: true }).toPromise();

export const handler = async (event, context, callback) => {
    await App;
    let url = format({
        pathname: event.path,
        query: event.queryStringParameters
    });
    url = url.replace('auth/', '');
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
        res = await Container.get<Server>(HAPI_SERVER).inject(options);
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