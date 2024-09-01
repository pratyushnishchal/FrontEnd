const prompt = require("prompt-sync")();

// wap which takes both num and alphabel if it encounters number it should break

// for loop

// let str=prompt("enter the string ")
// for(let i=0;i<str.length;i++){
//     if(!isNaN(str[i])){
//         break
//     }
//     else{
//         console.log(str[i])
//     }
// }

// while loop

// let str = prompt("enter the string ")
// let i = 0;
// let len = str.length
// while(i<len){
//     if (!isNaN(str[i])) {
//         break
//     }
//     else {
//         console.log(str[i])
//     }
//     i++
// }

// do while loop

// let str = prompt("enter the string ")
// let i = 0;
// let len = str.length
// do {
//     if (!isNaN(str[i])) {
//         break
//     }
//     else {
//         console.log(str[i])
//     }
//     i++
// }while(i<len)

// wap where it should take the input continously untill you give zero if you give zero it should terminate

// for loop

// for(;;){
//     let n=parseInt(prompt("enter the number "))
//     if(n==0){
//         break
//     }
//     else{
//         console.log(n)
//     }
// }

// while loop

// while(true){
//     let n=parseInt(prompt("enter the number "))
//     if(n==0){
//         break
//     }
//     else{
//         console.log(n)
//     }
// }

// do while loop

// do{
//     let n=parseInt(prompt("enter the number "))
//     if(n==0){
//         break
//     }
//     else{
//         console.log(n)
//     }
// }while(true)

// switch cases
// syntax
// switch (key) {
//     case value1:
//         console.log()
//         break;
//     case value2:
//         console.log()
//         break;
//     case value3:
//         console.log()
//         break;
//     ...
//     case valuen:
//         console.log()
//         break;

//     default:
//         break;
// }

// trafic signal code

// let color = prompt("Enter the color ")
// switch (color) {
//     case "Green":
//         console.log("GO")
//         break;
//     case "Red":
//         console.log("STOP")
//         break;
//     case "Yellow":
//         console.log("SLOW DOWN")
//         break;
//     default:
//         console.log("Enter valid color")
//         break;
// }

// wap using switch to perform arithmetic operation 

// let num1 = parseInt(prompt("Enter the 1st number "))
// let num2 = parseInt(prompt("Enter the 2nd number "))
// let operation = prompt("Enter the operation ")
// switch (operation) {
//     case "+":
//         res = num1 + num2
//         console.log(num1, operation, num2, " = ", res)
//         break;
//     case "-":
//         res = num1 - num2
//         console.log(num1, operation, num2, " = ", res)
//         break;
//     case "*":
//         res = num1 * num2
//         console.log(num1, operation, num2, " = ", res)
//         break;
//     case "/":
//         res = num1 / num2
//         console.log(num1, operation, num2, " = ", res)
//         break;
//     case "%":
//         res = num1 % num2
//         console.log(num1, operation, num2, " = ", res)
//         break;
//     case "**":
//         res = num1 ** num2
//         console.log(num1, operation, num2, " = ", res)
//         break;
//     default:
//         console.log("Enter valid operation")
//         break;
// }