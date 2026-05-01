function add(n1, n2){
    let num1 = n1;
    let num2 = n2;
    return num1+num2
}

function sub(n1, n2){
    let num1 = n1;
    let num2 = n2;
    return num1 - num2;
}

function multi(n1, n2){
    let num1 = n1;
    let num2 = n2;
    return n1*n2;
}

function divd(n1, n2){
    let num1 = n1;
    let num2 = n2;
    return num1/num2;
}
module.exports = {add, sub, multi, divd};