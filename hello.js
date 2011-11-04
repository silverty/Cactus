var app = require('express').createServer();

app.get('/', function(req, res){
    res.send('Hello World !');
});

console.log(__filename);

app.listen(3000);

