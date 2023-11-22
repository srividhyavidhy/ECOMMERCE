const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    address:{
          type:Array,
          required:true
      },
 
});

const Address= mongoose.model("Address",addressSchema);
module.exports = Address;