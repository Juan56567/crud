const express = require("express");
const expressMyconnection = require("express-myconnection");
const morgan = require("morgan");
const app = express();
const path = require("path");
const mysql = require("mysql");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(morgan("dev"));
app.use(
  expressMyconnection(mysql, {
    host: "localhost",
    user: "root",
    password: "Lenovo2023",
    port: 3306,
    database: "crud",
  }, 'single')
);

//

app.listen(3000, () => {
  console.log("Server en el puerto 3000");
});
