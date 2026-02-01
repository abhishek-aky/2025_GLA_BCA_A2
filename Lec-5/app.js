// const res = ()=>{
//     let n1 = 10;
//     let n2 = 41;
//     return n1*n2;
// }

// console.log(res());

let person = {
    naam : 'Abhishek Kumar',
    umar:26,
    greet(){
        return `Hi! I am ${this.naam}`;
    }
}
console.log(person.naam);
console.log(person.umar);
console.log(person.greet());



console.log(this);