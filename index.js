const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv").config();
const methodOverride = require("method-override");
const app = express()
const PORT = 5500;

mongoose.connect(process.env.KEY);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"))
app.use(express.static("public"));
app.use("/", routes);

app.listen(PORT);