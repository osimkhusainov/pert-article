const express = require("express");
const app = express();
const cors = require("cors");
const articleRoutes = require("./routes/articleRoutes");
app.use(cors());
app.use(express.json());
app.use("/articles", articleRoutes);

module.exports = app;
