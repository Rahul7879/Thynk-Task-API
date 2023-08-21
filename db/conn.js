const mongoose = require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/thynk-task-0");
    console.log("connected")
}
main().catch(e => console.log(e))