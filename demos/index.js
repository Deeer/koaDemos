const Koa = require('koa');
const convert = require('koa-convert');
const loggerGenerator = require('./middleware/logger-generator');
const  app = new Koa();


app.use(convert(loggerGenerator()));

app.use(ctx => {
    ctx.body = 'hello';
});


app.listen(7000);
console.log('node on line at port: 7000');
