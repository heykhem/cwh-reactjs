const connectToMongo = require("./db");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

connectToMongo()
  .then(() => console.log("Connected to db successfully"))
  .catch((error) => console.log(error));
