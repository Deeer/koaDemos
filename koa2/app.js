const Koa = require('koa');
const app = new Koa();

app.use(  ctx => {
   let url = ctx.request.url; 
   ctx.body = url;
});

app.listen(3000);
