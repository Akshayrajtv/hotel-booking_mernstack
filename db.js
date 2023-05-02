const mongoose = require("mongoose");
var mongoURL =
    "mongodb+srv://ravi:akr2001@cluster0.heywczj.mongodb.net/mern-ARRooms";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
var connection = mongoose.connection;

connection.on("error", () => {
    console.log("error occured!");
});

connection.on("connected", () => {
    console.log("MongoDB database connecetd!");
});

module.exports = mongoose;
