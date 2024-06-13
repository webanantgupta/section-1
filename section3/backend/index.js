const express = require("express");  //importing express
const userRouter = require("./routers/userRouter")

// initializing express
const app = express();


// initializing port
const port = 5000;


// middle ware

app.use(express.json()); // convert json to js
app.use("/user", userRouter);


// route or endpoint
app.get("/", (req,res) => {
  res.send("response from express index");
});

//add
app.get("/add", (req,res) => {
    res.send("add is here from index");
});


//get all
app.get("/getall", (req,res) => {
    res.send("this is get all");
});

//update
app.get("/update", (req,res) => {
    res.send("this is update");
});

//delete
app.get("/delete", (req,res) =>{
    res.send("this is delete");
});


app.listen(port, () => {
    console.log("server started");
});