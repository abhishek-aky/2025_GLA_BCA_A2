const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/studentDB").then(()=>{
    console.log(`MongoDb connected Successfully`);
}).catch((err)=>{
    console.log(`Error Occurred: ${err}`);
})
const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    grade:Number
})
const Student = mongoose.model("Student", studentSchema);
async function insertData(){
    const s1 = new Student({
        name:"Abhishek",
        age:24,
        grade:8
    })
    await s1.save();
    console.log(`Data Inserted Successfully✅`);
    const data = await Student.find();
    console.log("Data is : ", data);
}
insertData();