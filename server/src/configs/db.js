const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "crud_db",
  password: "soytk",
  host: 3306,
});

module.exports = db;
