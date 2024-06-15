const express =require("express");
const Model = require("../models/userModel");

// initalizing router
const router = express.Router();


router.post("/add", (req,res) =>{

    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
       res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
   // res.send("response from user");
});

router.get("/getall", (req,res) =>{
    res.send("response from user get all");
});


// exporting this route
module.exports = router;