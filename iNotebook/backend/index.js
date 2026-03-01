const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const connectToMongo = require("./db");

const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow same-origin/non-browser requests (like Postman) and known frontend origins.
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.options("/*splat", cors(corsOptions));

connectToMongo()
  .then(() => console.log("Connected to db successfully"))
  .catch((error) => console.log(error));

// available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`);
});
