const fs = require("fs");
let data =   "Hello, GLA is Welcoming for 2026 Admission";
fs.writeFile("Sample.txt", data, {encoding:'utf-8', flag:'w'}, (err)=>{
    if(err) throw(err);
    console.log("File created successfully");
})

fs.readFile("Sample.txt", {encoding:'utf-8', flag:'r'}, (err, data)=>{
    if(err) throw(err);
    console.log(data);
})

fs.appendFile("Sample.txt", "\nNorth India's Best College", (err)=>{
    if(err) throw(err);
    console.log("File Edited Successfully");
})
fs.unlink("Sample.txt", (err)=>{
    if(err) throw(err);
    console.log("File deleted Successfully");
})