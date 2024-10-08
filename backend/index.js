const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://localhost:27017", {
  //First Parameter is URL Path
  // Second it take object. In Object it takes some credentials 
  useNewUrlParser:true,
  useUnifiedTopology:true, // to Connect Data Base
}).then(()=>{
  console.log("Connected to DataBase");
}).catch(()=>{
  console.log("Not Connected!");
})

app.listen(5000, ()=>{
  console.log("Server is running on port 5000");
})