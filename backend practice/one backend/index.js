// importing express
const express = require("express");

// create express object
const app = express();

// port on which server will run
const port = 5000;



app.listen(port, () => {
    console.log("server started");
});