const express = require("express");
const path = require('path')

const app = express();

const PORT =process.env.PORT ||3000;

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

app.get("/home",(req, res)=>{
  res.sendFile(path.resolve("./views/home.html"))
})



app.listen(PORT,()=>console.log(`servidor corriendo en el puerto ${PORT}`))

