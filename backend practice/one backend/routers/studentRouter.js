// importing express
const express = require(express);


const Model = require("../models/studentModel");


// initalizing router
const router = express.Router();


router.post("/add", (res,req) => {
   console.log("data from post");
});