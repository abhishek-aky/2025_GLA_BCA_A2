const fs = require("fs");
fs.writeFile("Sample.txt", {encoding:"utf-8", flag:'w'}, "Hello", (err)=>{
    if(err) console.log(err);
    console.log("File Created Successfully");
})
fs.readFile();
fs.appendFile();


fs.writeFileSync();
fs.readFileSync();
fs.appendFileSync();
fs.unlinkSync();