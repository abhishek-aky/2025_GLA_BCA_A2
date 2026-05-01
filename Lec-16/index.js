const readLine = require("readline");
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
const username = "admin";
const password = "123456";
let attempts = 3;
function askCreditionals(){
    if(attempts === 0){
        console.log(`You have exceeded the Attempts limit, 😭Please try After Sometime`);
        rl.close();
        return;
    }
    rl.question("Enter Username : ", (user)=>{
        rl.question("Enter Password : ", (pass)=>{
            if(user === username && pass === password){
                console.log(`Welcome ${user} Sir 😊`);
            }
            else{
                attempts--;
                console.log(`❌Invalid Credentionals, ${attempts} Attempts left`);
                askCreditionals();
            }
            // rl.close();
        })
    })
}
askCreditionals();