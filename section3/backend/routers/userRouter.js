const express =require("express");


// initalizing router
const router = express.Router();


router.post("/add", (req,res) =>{

    console.log(req.body);
    res.send("response from user");
});

router.get("/getall", (req,res) =>{
    res.send("response from user get all");
});


// exporting this route
module.exports = router;