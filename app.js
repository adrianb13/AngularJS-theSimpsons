const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + "/app"));

app.use("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/index.html"));
});

app.use(express.static("./app")); // set static files location, in this case the route, add a file name if not
app.listen(PORT, function () {
  console.log("Listening on port:" + PORT);
});