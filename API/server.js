const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

// 1- SERVER

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`App is successfully running on port ${port}`);
});

// 2- DATABASE CONNECTION

const database = process.env.MONGO_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(database)
  .then(() => console.log("Database Connected Successfully"))
  .catch((error) => console.log(error));
