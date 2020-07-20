var express = require('express');

var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


const hostname = 'localhost';
const port = 3000;

app.listen(port);

console.log(`Нажми Ctrl + http://${hostname}:${port}/`);

// ввести npm run start в терминале
