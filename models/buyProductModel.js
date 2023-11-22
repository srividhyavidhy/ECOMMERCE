const mongoose = require("mongoose");

const buyProductSchema = mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    transection_id:{
          type:String,
          required:true
      },
      vendor_id:{
          type:String,
          required:true
      },
      store_id:{
          type:String,
          required:true
      },
      customer_id:{
          type:String,
          required:true
      },
});

const BuyProduct= mongoose.model("BuyProduct",buyProductSchema);
module.exports = BuyProduct;