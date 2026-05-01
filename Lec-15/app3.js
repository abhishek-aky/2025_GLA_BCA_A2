const fs = require("fs");
const content = "Hello! How are u?";
try{
    fs.writeFileSync("Sample.txt", content);
}
catch(err){
    console.error(err);
}