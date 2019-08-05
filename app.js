const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './app/index.html'));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/index.html"));
});

app.use(express.static("./app")); // set static files location, in this case the route, add a file name if not
app.listen(process.env.PORT || 8000, function () {
  console.log("Listening on port:" + PORT);
});