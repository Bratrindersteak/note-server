const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const login = ctx => {
    ctx.response.status = 200;
    ctx.response.message = 'login';
    ctx.response.body = 'login';
};

// app.use(async(ctx, next) => {
//     console.log( 'one' );
//
// await next();
//
// console.log( 'six' );
// });
//
// app.use(async(ctx, next) => {
//     console.log( 'two' );
//
// await next();
//
// console.log( 'five' );
// });
//
// app.use(async(ctx, next) => {
//     console.log( 'three' );
//
// await next();
//
// console.log( 'four' );
// });
//
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/login', (ctx, next) => {
    ctx.response.set({
        'Access-Control-Allow-Origin': '*',
    });
    // ctx.router available
    ctx.response.type = 'json';
    ctx.response.body = {
        data: 'Hello World'
    };

    console.log( `type: ${ ctx.type }` );
    console.log( `status: ${ ctx.status }` );
    console.log( `message: ${ ctx.message }` );
    console.log( `length: ${ ctx.length }` );
});

router.get('/getData', (ctx, next) => {
    ctx.response.set({
        'Access-Control-Allow-Origin': '*',
    });
    ctx.response.type = 'json';
    ctx.response.body = [{
            type: '早饭',
            name: '烤翅一绝',
            cost: '8'
        }, {
            type: '早饭',
            name: '烤翅一绝',
            cost: '9'
        }, {
            type: '早饭',
            name: '烤翅一绝',
            cost: '10'
        }, {
            type: '早饭',
            name: '烤翅一绝',
            cost: '13'
        }];
});

app.listen(3000, () => console.log( 'open on port 3000' ));
