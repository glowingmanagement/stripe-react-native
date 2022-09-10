import express from "express";
require("dotenv").config();

const app = express();
const port = 3000;

process.env;

app.listen(port, () => {
  console.log(`App listening at https://localhost:${port}`);
});
