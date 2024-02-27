const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "hospital-pets",
});
connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Database connected successfully!");
  }
});
module.exports = connection;
