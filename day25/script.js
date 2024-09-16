const prompt = require("prompt-sync")()
// let s1=prompt("enter the string: ")

// console.log(s1.split(" "))

// reverse of a string

// let s2=prompt("enter the string: ")
// let revstr="";
// for(let i=s2.length-1;i>=0;i--){
//     revstr=revstr+s2.charAt(i);
// }
// console.log(revstr)

// create 5 d array and access middle element

// let fivedarray=[[[[[1,2,3],
//                     [4,5,6],
//                     [7,8,9]]]]]

// console.log(fivedarray[0][0][0][1][1])

// take 5 user inputs and convert into mlti dimensional array

// let n1=parseInt(prompt("Enter 1st element "))
// let n2=parseInt(prompt("Enter 2nd element "))
// let n3=parseInt(prompt("Enter 3rd element "))
// let n4=parseInt(prompt("Enter 4th element "))
// let n5=parseInt(prompt("Enter 5th element "))

// let arr=[[[n1,n2,n3,n4,n5]]]
// console.log(arr)

// try all methods which we tried on dimensinal for two dimensinal

// let a=[[1,2,3],
//         [4,5,6]]
// Changing the value of 2 d array

// a[0][1]=7
// console.log(a)

//add three contacts to the contact array and display all the contacts in the list and search the contact in the array for the namev "akshatha" and display the result if its matching or not 

let contact=[{'name':'Pratyush','phone_number':'123409999'},{'name':'Akshatha','phone_number':'123409999'},{'name':'Rahul','phone_number':'123409999'}]
console.log("List of contacts ")

for(let i=0;i<contact.length;i++){
    console.log(`Name:${contact[i].name}`)
    console.log(`Phone number:${contact[i].phone_number}`)
}
search_name=prompt("Enter the search name ")
serach_ele=[]
for(let i=0;i<contact.length;i++){
    if(contact[i].name.toLowerCase()==search_name.toLowerCase()){
        s=serach_ele.push(contact[i])
    }
}
if(serach_ele.length>0){
    console.log(search_name,"found in the list")
    for(let i=0;i<serach_ele.length;i++){
        console.log(`Name:${serach_ele[i].name}`)
        console.log(`Phone number:${serach_ele[i].phone_number}`)
    }
}
else{
    console.log(search_name,"not found the list")
}