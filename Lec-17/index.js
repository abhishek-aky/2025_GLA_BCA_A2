const {add, sub, multi, divi} = require("./Math")
const readLine = require("readline");
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
let result;
function calc(){
    rl.question("Enter First Number : ", (num1)=>{
        rl.question("Enter Second Number : ", (num2)=>{
            rl.question("Enter Operator (+,-,*,/):",  (op)=>{
                num1 = Number(num1);
                num2 = Number(num2);
                switch(op){
                    case '+': result = add(num1, num2); break;
                    case '-': result = sub(num1, num2); break;
                    case '*': result = multi(num1, num2); break;
                    case '/': result = divi(num1, num2); break;
                    default:" Invalid Operator";
                }
                console.log(`Result is : ${result}`);
                rl.close();
            })
        })
    })
}
calc();