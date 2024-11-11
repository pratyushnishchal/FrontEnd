// When the function body has only a single statement, you can omit
// the curly braces and the return keyword:
console.log("we are learning arrow function")

function print(){
    console.log("Hello world")
}
print();
// Arrow function
// const printName=()=>console.log("Hello World");

// add 2 numbers
// let sum=(a,b)=>console.log(a+b)
// sum(10,20)

// let sum=(a,b)=>a+b

// console.log(sum(10,20))

// let sum=(a,b)=>{return a+b}
// console.log(sum(10,20))

let sum=(a,b)=>{
    console.log("adding 2 numbers")
    return a+b;
}

console.log(sum(10,30))