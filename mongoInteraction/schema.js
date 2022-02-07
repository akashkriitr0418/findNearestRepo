const  mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: String,
    Lat: String,
    Long: String
})
module.exports = new mongoose.model("User", userSchema);