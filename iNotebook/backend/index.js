const express = require("express");
const app = express();
const port = 5000;
const connectToMongo = require("./db");

app.use(express.json());

connectToMongo()
  .then(() => console.log("Connected to db successfully"))
  .catch((error) => console.log(error));

// available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebooka backend listening on port http://localhost:${port}`);
});
