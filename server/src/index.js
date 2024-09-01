const express = require("express");
const router = require("./configs/router");
const cors = require("cors");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(app.get("port"), () =>
  console.log("sevrer on port " + app.get("port"))
);
