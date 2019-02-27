const express = require("express");
const mongoose = require("mongoose");
const requireDir =  require("require-dir");

const app = express();
app.use(express.json());

mongoose.connect('mongodb://guiflr:36639821gui@ds149365.mlab.com:49365/nodeapi',{useNewUrlParser: true});

requireDir('./src/models');

app.use("/api", require("./src/routes"));

app.listen(3001);