const mongoose = require("mongoose");
                                            //password                         name of database
const url = "mongodb+srv://anantguptastu0698:1234@cluster0.zmr3adw.mongodb.net/anant7052?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(url)
.then((result) => {
    console.log("database connected");
}).catch((err) => {
    console.log("err");
});

module.exports=mongoose;