//import FitEntry from "../screens/fitnessEntries";
//import { Express } from "express";

const express = new require("express");
const app = express();
const cors = new require("cors");
const bodyParser = new require("body-parser");
const logger = new require("morgan");
const mong = new require("mongoose");
const config = new require("./config");

//mong.set("useNewUrlParser", true);
//mong.set("useFindAndModify", false);
//mong.set("useCreateIndex", true);

const port = 3000;

const usersRouter = new require("./routes/users");

app.use(logger('dev'));

const dbURL = config.dbURL;

var options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
  
mong.connect("mongodb+srv://manish03mallik:Seahawks#3@h4u.avap8.mongodb.net/?retryWrites=true&w=majority", options, (err) => {
    if (err) console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", usersRouter);

app.listen(port, function() {
    console.log("Runnning on " + port);
});

module.exports = app;