// A callback function is a function that you pass as an argument to another function. It gets executed after a certain task is completed.
console.log("We are learning callback function")

const printHello=()=>{
    console.log("Hello world")
}
const printBye=()=>{
    console.log("Bye!!")
}
const test=(name,callback)=>{
    console.log("inside the test function",name)
    callback();
}
test("Pratyush",printHello)
test("Pratyush",printBye)