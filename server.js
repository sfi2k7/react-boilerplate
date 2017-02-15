var express = require("express");

var app = express();

app.use(express.static('public'));

app.listen(7878,function(){
    console.log("Server Started");
});