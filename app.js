var express = require('express');
var app = express();

app.use('/',express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000);
// app.listen(3000, () => console.log("escutando a porta 3000"));

