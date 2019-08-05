var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8000;

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './app/index.html'));
});

app.use(express.static("./app")); // set static files location, in this case the route, add a file name if not
app.listen(PORT, function () {
  console.log("Listening on port:" + PORT);
});