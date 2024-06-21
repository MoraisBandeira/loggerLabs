'use extrict'
const Koa = require('koa');

function serverHttp(logger){
    const app = new Koa();

    app.use(async ctx => {
    ctx.body = 'Hello World';
    });
    
    return app;
}

module.exports = serverHttp;