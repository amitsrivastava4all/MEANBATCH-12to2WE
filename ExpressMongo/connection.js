var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/expresscrud");
module.exports=mongoose;