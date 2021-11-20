require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = process.env.PORT || 8000;
require("./db/conn");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use Router
app.use(require("./router/auth"));

//JSON Response

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
