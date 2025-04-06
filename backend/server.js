const express = require("express");
const app = express();
const { createServer } = require("http");
const server = createServer(app);
const port = 5000;

app.get("/", (req, res) => {
  res.json("Hello World Ecommmm");
});

server.listen(port, () => {
  console.log("Server running on port :", port);
});
