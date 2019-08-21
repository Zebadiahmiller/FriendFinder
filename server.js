const express = require("express");
const path = require("path")

const app = express();

const port = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(port, function() {
    console.log("App listening on PORT: " + port);
  });
  