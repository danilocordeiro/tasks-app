const express = require("express");
const app = express();

app.use(express.static("./dist/frontend"));

app.get("/*", function (req, res) {
  res.sendFile("index.htm", { root: "dist/frontend/" });
});

app.listen(process.env.PORT || 8081);