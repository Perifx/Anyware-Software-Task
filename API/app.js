const express = require("express");
const cors = require("cors");
const announcementRoutes = require("./Routes/Announcement");
const quizRoutes = require("./Routes/Quiz");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/announcement", announcementRoutes);
app.use("/quiz", quizRoutes);

module.exports = app;
