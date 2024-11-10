console.log("We are learning scope")

// global scope
let globalVar=10;

let display=()=>{
    console.log("Inside the display function")
    console.log(`Inside the function ${globalVar}`)
}
display();
console.log(globalVar)