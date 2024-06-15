const {Schema, model} = require("../connection");

const mySchema = new Schema({
    name: String,
    title: String,
    image : String,
    likes : {type : Number, default : 0},
    shares : {type : Number, default : 0}
});

module.exports = model("feed" , mySchema);
