const express=require('express')
var app=express();

app.use(express.static('./qi'))

app.listen(3000)