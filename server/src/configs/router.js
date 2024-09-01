const express = require("express");
const db = require("./db.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM todo", (err, data) => {
    if (err) return res.json({ err });
    res.json(data);
  });
});

router.post("/add", (req, res) => {
  db.query(
    "INSERT INTO todo(`txt`) VALUES (?)",
    [req.body.txt],
    (err, data) => {
      if (err) return res.json({ err });
      res.json({ mensaje: "Agregado" });
    }
  );
});

module.exports = router;
