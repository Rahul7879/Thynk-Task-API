const express = require("express");
const app = express();
require("./db/conn.js")
const port = 8000;
app.use(express.json())
const HeadPhone = require("./routes/router.js")
app.use(HeadPhone);
app.listen(port, ()=>{
    console.log("listening");
})

app.get(".test" , (req,res)=>{
    res.send("Wroking");
})