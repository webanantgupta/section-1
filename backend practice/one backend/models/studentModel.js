const {Schema, model} = require("../connection");

const mySchema = newSchema({
    name : String,
    fathername : String,
    address : String,
    marks : Number
});

module.exports=model("Student", mySchema);