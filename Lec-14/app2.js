const fs = require("fs");
fs.unlink("Sample.txt", (err)=>{
    if(err) throw(err);
    console.log("File deleted Successfully");
})