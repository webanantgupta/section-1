const express = require("express");  //importing express
const userRouter = require("./routers/userRouter");
const feedRouter = require("./routers/feedRouter");

const cors = require("cors");

// initializing express
const app = express();


// initializing port
const port = 5000;


// middle ware


// handling cors
app.use(cors({
    origin: ["http://localhost:5000"]
}));

app.use(express.json()); // convert json to js
app.use("/user", userRouter);
app.use("/feed", feedRouter);



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