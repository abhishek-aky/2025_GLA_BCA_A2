const fs = require("fs");
const data = "Hello, Sorry to say But Zero Civic Sense";

fs.writeFile("hello.txt", data, (err)=>{
    if(err){
        console.log("Error aa gya : ", err);
    }
    else{
        console.log("File bn gyi");
    }
})

fs.readFile