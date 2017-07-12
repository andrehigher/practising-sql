var express = require('express');
var app = express();

app.use(express.static('public'));

var routes = require('./routes');
app.use('/api', routes);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
