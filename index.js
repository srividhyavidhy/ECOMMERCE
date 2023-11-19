const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ECOM")
.then(() => console.log('Connected MongoDB!'));

//user routes
const user_route = require("./routes/userRoute")

app.use('/api', user_route);

//store route
const store_route = require("./routes/storeRoute")

app.use('/api', store_route);

app.listen(3000, function(){
    console.log("Server is Run....")
})