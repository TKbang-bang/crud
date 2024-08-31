const express = require("express");
const router = require("./configs/router");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use("/", router);

app.listen(app.get("port"));
