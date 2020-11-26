const exporess = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
}); connection.connect(function (err) {
    if (err) console.log(err.message);
    console.log("Successfully connected");
});

const app = exporess();
const port = "3000";

app.get("/", (req, res) => {
    res.send("Za, Warudo");
});

app.listen(port, () => {
    console.log(`[INFO] Listening on http://localhost:${3000}`);
});