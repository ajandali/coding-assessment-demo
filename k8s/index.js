var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Abdulla" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "coding assessment" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " simple code for coding assessment project" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;