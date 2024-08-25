const prompt = require("prompt-sync")();

// signup and login code

console.log("PLEASE SIGNUP")
let username=prompt("enter username ")
let password=prompt("enter password ")

console.log("SIGNUP SUCCESSFUL")
console.log("PLEASE LOGIN")
let loginusername=prompt("enter login username ")
let loginpassword=prompt("enter login password ")
if(username==loginusername ){
    if(password==loginpassword){
        console.log("LOGIN SUCCESSFUL")
        console.log(username," Welcome To The Website")
    }
    else{
        console.log("Wrong password")
    }
}
else{
    console.log("Wrong username")
}

// electricity bill
// less than 200-> free
//  greater than 200 an dless than 250 18 ruppess per unit
//  greater than 250 an dless than 300 36 ruppess per unit
// more than 50 ruppess

// let unit=parseInt(prompt())
// let cost=0;
// if(unit>300){
//     cost=unit*50/100+unit
//     console.log("RS.",cost)
// }
// else if(unit>=250 && unit<=300){
//     cost=unit*36/100+unit
//     console.log("RS.",cost)
// }
// else if(unit>=200 && unit<=250){
//     cost=unit*18/100+unit
//     console.log("RS.",cost)
// }
// else if(unit<200){
//     console.log("free")
// }
// else{
//     console.log("enter correct unit")
// }

// grading system
// less than 35->F
// 35-45->C
// 45-50->B
// 50-55->A
// MORE THAN topper

// let marks=parseInt(prompt("enter the marks"))

// if(marks>55){
//     console.log("topper")
// }
// else if(marks>50 && marks<=55){
//     console.log("A Grade")
// }
// else if(marks>45 && marks<=50){
//     console.log("B Grade")
// }
// else if(marks>35 && marks<=45){
//     console.log("C Grade")
// }
// else if(marks<35 && marks>=0){
//     console.log("fail")
// }
// else{
//     console.log("enter correct marks")
// }

// buy a bike with road tax

// navy-->tax=15%
// state-->tax=10%
// normal people-->tax=28%

// tvs honda 95000

// let bike_price=parseInt(prompt("Enter bike price "))
// let type=prompt("Enter the type of person ")
// let total_price;
// if(type=="navy"){
//     total_price=(bike_price*0.15);
//     console.log("total tax=",total_price)
// }
// else if(type=="state"){
//     total_price=(bike_price*0.20);
//     console.log("total tax=",total_price)
// }
// else if(type=="normal"){
//     total_price=(bike_price*0.28);
//     console.log("total tax=",total_price)
// }
// else{
//     console.log("invalid type")
// }

// loops

// table in reverse order

// let num=parseInt(prompt("Enter the value of n for which you want to find table "))

// for(let i=10;i>=1;i--){
//     console.log(num," * ",i," = ",num*i)
// }

// factorial of a number

// let num1=parseInt(prompt("Enter the value of n "))
// let fact=1;

// for(let i=num1;i>=1;i--){
//     fact=fact*i;
// }
// console.log(fact)

// seperate even and odd numbers from the range of numbers

// let n=parseInt(prompt("Enter the limit "))
// for(let i=0;i<=n;i++){
//     if(i%2==0){
//         console.log(i," is even")
//     }
//     else{
//         console.log(i," is odd")
//     }
// }

// print first 10 even numbers

// let n=parseInt(prompt("Enter the number of even numbers you want "))
// for(let i=0;i<2*n;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// reverse of a string

// let str=prompt("Enter the string ")
// let revstr=""
// for(let l=str.length-1;l>=0;l--){
//     revstr=revstr+str[l];
// }
// console.log(revstr)

// fibonaci number
// 0 1 1 2 3 5 8 13...

// let num=parseInt(prompt("enter the limit "))
// let n1=0
// let n2=1
// let n3
// console.log(n1)
// console.log(n2)
// for(let i=2;i<num;i++){
//     n3=n1+n2
//     console.log(n3)
//     n1=n2
//     n2=n3
// }

