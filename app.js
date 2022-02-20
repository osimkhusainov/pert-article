const express = require("express");
const app = express();
const cors = require("cors");
const articleRoutes = require("./routes/articleRoutes");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use("/articles", articleRoutes);
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

module.exports = app;
