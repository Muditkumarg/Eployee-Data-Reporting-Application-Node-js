const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const connection = require("./database/db.js");
const router = require('./routes/routes.js');

app.use('/', router);

app.listen(5000, () => {
    console.log("Hello from port 5000");
})

