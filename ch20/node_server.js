var express = require("express");
var app = express();
app.user("/", express.static("./static"))
    .use("/images", express.static("../images"))
    .use("/lib", express.static("../lib"));
app.listen(8080);
