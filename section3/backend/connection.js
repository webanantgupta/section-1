const mongoose = require("mongoose");
              //                             password                          name of data base here   
const url = "mongodb+srv://anantguptastu0698:1234@cluster0.zmr3adw.mongodb.net/database1?retryWrites=true&w=majority&appName=Cluster0"

// this is asynchronious function  - return promise object
mongoose.connect(url)
.then((result) => {
    console.log("database connected");
})
.catch((err) => {
    console.log(err);
});