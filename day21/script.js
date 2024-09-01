const prompt = require("prompt-sync")();
// skip the vowels from the string

// let str=prompt("Enter the string ")
// for(let i=0;i<str.length;i++){
//     if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
//         continue
//     }
//     else{
//         console.log(str[i])
//     }
// }

// iterate the string0
// output-
// apple
// a
// p
// p
// l
// e
// ball
// b
// a
// l
// l
// cat
// c
// a
// t

// s=["apple","ball","cat"]
// for(let i=0;i<s.length;i++){
//     console.log(s[i])
//     for(let j=0;j<s[i].length;j++){
//         console.log(s[i][j])
//     }
// }

// s=["apple","ball","cat"]
// for(let i in s){
//     console.log(s[i])
//     for(let j in s[i]){
//         console.log(s[i][j])
//     }
// }

// let person={
//     name:"pratyush",
//     age:23,
//     course:{coursename:"java",duration:2},
//     address:{city:"bangalore", state:"karnataka"},
//     fees:50000
// }

// for(let x in person){
//     console.log(person[x])
// }

// print the number from 1 to 10

// let num=1
// while(num<=10){
//     console.log(num)
//     num++
// }

// table

// let n=parseInt(prompt("Enter the number "))
// let i=1
// while(i<=10){
//     console.log(n," * ",i," = ",n*i)
//     i++
// }

// reverse table

// let n=parseInt(prompt("Enter the number "))
// let i=10
// while(i>=1){
//     console.log(n," * ",i," = ",n*i)
//     i--
// }

// print a string
// let str=prompt("Enter the string ")
// let str_len=str.length
// let i=0
// while(str_len>i){
//     console.log(str[i])
//     i++
// }

// identify vowels and constants

// let str=prompt("Enter the string ")
// let str_len=str.length
// let i=0
// while(str_len>i){
//     if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
//         console.log(str[i]," vowel")
//     }
//     else{
//         console.log(str[i]," consonant")
//     }
//     i++
// }

// print 10 numbers and divide odd and even numbers

// let n=1
// while(n<=10){
//     if(n%2==0){
//         console.log(n," even")
//     }
//     else{
//         console.log(n," odd")
//     }
//     n++
// }

// fibonacci series

// let num_limit=parseInt(prompt("enter the limit "))
// let n1=0
// let n2=1
// let i=2
// console.log(n1)
// console.log(n2)

// while(i<num_limit){
//     n3=n1+n2
//     console.log(n3)
//     i++
//     n1=n2
//     n2=n3
// }

// factorial

// let num=parseInt(prompt("enter the number "))
// let i=1
// let fact=1
// while(i<=num){
//     fact=fact*i
//     i++
// }
// console.log(fact)