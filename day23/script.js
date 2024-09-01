const prompt = require("prompt-sync")();

// for loop

// let str=prompt("Enter the string ")
// for(let i=0;i<str.length;i++){
//     if(str[i] =='a' || str[i] =='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//         console.log(str[i])
//     }
//     else{
//         continue
//     }
// }

// while loop

// let str=prompt("Enter the string ")
// let i=0;
// let len=str.length
// while(i<len){
//     if(str[i] =='a' || str[i] =='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//         console.log(str[i])
//     }
//     else{
//         i++
//         continue
//     }
//     i++
// }

// do while

// let str=prompt("Enter the string ")
// let i=0;
// let len=str.length
// do{
//     if(str[i] =='a' || str[i] =='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//         console.log(str[i])
//     }
//     else{
//         i++
//         continue
//     }
//     i++
// }while(i<len)

// for(let i=1;i<=25;i++){
//     if((i-1)%3!==0){
//         continue
//     }
//     else{
//         console.log(i)
//     }
// }

// functions

// function add(n1,n2){
//     console.log(n1+n2)
// }

// print sum of all the numbers in given list

// function sum_list(l){
//     let sum=0;
//     for(let i=0;i<l.length;i++){
//         sum=sum+l[i]
//     }
//     console.log(sum)
// }

// sum_list([1,2,3,4])

// function sum_list(l=[1,2,3,4]){
//     let sum=0;
//     for(let i=0;i<l.length;i++){
//         sum=sum+l[i]
//     }
//     console.log(sum)
// }

// sum_list()

// function sum_list(){
//     let l=[1,2,3,4]
//     let sum=0;
//     for(let i=0;i<l.length;i++){
//         sum=sum+l[i]
//     }
//     console.log(sum)
// }

// sum_list()

// function sum_list(l=[1,2,3,4]){
//     let sum=0;
//     for(let i=0;i<l.length;i++){
//         sum=sum+l[i]
//     }
//     return sum
// }

// console.log(sum_list())

// celsius to fahrenheit

// function cToF(temp){
//     f=(9/5*temp)+32
//     console.log(f)
// }
// c=parseInt(prompt("Enter the temperature "))
// cToF(c)

// function cToF(){
//     temp=parseInt(prompt("Enter the temperature "))
//     f=(9/5*temp)+32
//     console.log(f)
// }

// cToF()
// val=parseInt(prompt("Enter the temperature "))
// function cToF(temp=val){
//     let f=(9/5*temp)+32
//     console.log(f)
// }

// cToF(val)

// val=parseInt(prompt("Enter the temperature "))
// function cToF(temp=val){
//     let f=(9/5*temp)+32
//     return f
// }

// console.log(cToF(val))
// let flag=0;
// let prime=function(n){
//     if(n<=1){
//         console.log(n,"Prime number")
//     }
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             console.log(n," not a prime number")
//             flag=1
//             break
//         }
//     }
//     if(flag==0){
//         console.log(n,"is a prime number")
//     }
// }
// num=parseInt(prompt("Enter the number "))
// prime(num)

// fibonnaci series

// let num_limit = parseInt(prompt("enter the limit "))
// let n1 = 0
// let n2 = 1
// let i = 2

// let fibo = (num_limit) => {
//     console.log(n1)
//     console.log(n2)
//     while (i < num_limit) {
//         n3 = n1 + n2
//         console.log(n3)
//         i++
//         n1 = n2
//         n2 = n3
//     }
// }
// fibo(num_limit)

// square of a number

// x=parseInt(prompt("enter the number "))
// let num=(n)=>n*n

// console.log(num(x))

// concatenate 2 strings

// x=prompt("enter the string 1 ")
// y=prompt("enter the string 2 ")
// let z=(x,y)=>x+" "+y
// console.log(z(x,y))

// to check in given list whether its even or odd 

// let num=parseInt(prompt("Enter the number "))
// let oddOrEven=(num)=>{
//     if(num%2==0) return "even"

//     else return "odd"
// }

// console.log(oddOrEven(num))

// iterate an object inside an arrow function

const obj = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(obj)) {
  const arrowFunction = () => console.log(`Key: ${key}, Value: ${value}`);
  arrowFunction();
}

