const express = require("express");
const path = require('path')

const app = express();

//usa las imagenes de carpeta//
app.use(express.static("./public"));

//requerir puerto //
app.get("/",(req, res)=> {
    res.sendFile(path.resolve("./views/home.html"));
})
//puerto registro 
app.get("/register",(req, res)=>{
  res.sendFile(path.resolve("./views/register.html"))
})
app.get("/login",(req, res)=>{
  res.sendFile(path.resolve("./views/login.html"))
})


app.listen(3000, () => {
  console.log("servidor funcionando...");
});



