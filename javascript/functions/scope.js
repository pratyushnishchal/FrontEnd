console.log("We are learning scope")

// global scope
// let globalVar=10;

// let display=()=>{
//     console.log("Inside the display function")
//     console.log(`Inside the function ${globalVar}`)
// }
// display();
// console.log(globalVar)

// local scope

// let display=()=>{
//     let localVar=10;
//     console.log("Inside the display function")
//     console.log(`Inside the function ${localVar}`)
// }
// display();
// console.log(localVar)

let blockVar=10;
if(true){
    console.log(blockVar)
}
console.log(blockVar)