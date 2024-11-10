// A function is a block of code designed to perform a particular task.

// It is executed when it is invoked or called.
console.log("we are learning functions")

// function with parameter

function sum(a,b){
    console.log(a+b)
}
sum(10,4)
sum(21,4)
sum(20,40)

// function without parameter

function printName(){
    console.log("Pratyush")
}
printName()
printName()
printName()

function sumOfTwoNums(a,b){
    return a+b;
}
let res=sumOfTwoNums(10,20)
console.log(res)

function greet(name){
    return `Hello ${name}`
}

let yourName=greet("Pratyush")
console.log(yourName)