var express=require('express');
var bodyParser=require('body-parser');
var route=require('./router/route');
var mongoose=require('./db/db');
var passport=require('passport');

var app=express();
global.token='1';

app.use(bodyParser.json())
app.use(passport.initialize())

route.route(app);

app.listen(3000,()=>{
  console.log('Connected')
});
