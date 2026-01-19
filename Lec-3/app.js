// let count = 0;
// // count = count + 1 
// count++;
// ++count;
// // console.log(count++);
// console.log(++count);

// ---------------------------------Assignment Operators
// let val = 10;

// -----------------------------Mathematical Operators---------------------------

// let greet = "Hello";
// let greeting = "Krish ka gaana Sunega?"
// let relat = "Le beta Dil na diya...... le betaaaa..........dil na diya"

// // console.log(`${greet} ${greeting} ${relat}`);
// console.log(greet + greeting+relat);
// console.log(greet - greeting);
// console.log(greeting/relat);
// console.log(greeting*relat);



// console.log('2' + 1 + 4);
// console.log('2' - 1 + 6);
// console.log(2 + 1 + '4');


// let num1 = 20;
// let num2 = 10;
// console.log(num1 + num2);
// console.log(num1-num2);
// console.log(num1/num2);
// console.log(num1*num2);
// console.log(num1%num2);

// ---------------------Conditionals-------------------------
// let score = 90;
// if(score >= 91){
//     console.log("O Grade");
// }
// else if(score >=81){
//     console.log('A+');
// }
// else if(score >=71){
//     console.log('A');
// }
// else if(score >=61){
//     console.log('B+');
// }
// else if(score >=51){
//     console.log('B');
// }
// else if(score >=41){
//     console.log('C');
// }
// else if(score >= 31){
//     console.log('P');
// }
// else{
//     console.log("A single piece of paper can't  decide my future");
// }

// let Money = 100000;
// let balance = 10000000;
// if(Money >=100000 && balance >= 10000000){
//     console.log("Chalo Goa chalte hain");
// }
// else{
//     console.log("Hum toh gareeb hain");
// }

// let Money = 100000;
// let balance = 10000000;
// if(Money >=100000 || balance >= 1000){
//     console.log("Chalo Goa chalte hain");
// }
// else{
//     console.log("Hum toh gareeb hain");
// }

// functions

function jodna(){
    let num1 = 10;
    let num2 = 20;
    console.log(num1+num2);
}
// jodna();

function Sum2(num1, num2, num3){
    let n1 = num1;
    let n2 = num2;
    let n3 = num3;
    console.log(n1+n2+n3);
}

// Sum2(10,20);


function Sum2(num1, num2, num3 = 50){
    let n1 = num1;
    let n2 = num2;
    let n3 = num3;
    console.log(n1+n2+n3);
}

Sum2(10, 20);
Sum2(10, 20, 30);








