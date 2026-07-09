const mongoose = require("mongoose");


const mailSchema = new mongoose.Schema({
 name: {
   type: String,
 },
 type: {
   type: String,
 },
 pricedollar: {
   type: Number,
   default: 1,
 },
});


module.exports = mongoose.model("Mail", mailSchema);