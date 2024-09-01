// without recrusion

// fibo=[0,1]
// n=5
// for(let i=2;i<=n;i++){
//     fibo[i]=fibo[i-1]+fibo[i-2]
// }
// console.log(fibo)

// using recursion

// function fibo(num){
//     if(num<2) return num
//     else return fibo(num-1)+fibo(num-2)
// }

const prompt = require("prompt-sync")()
// let n=parseInt(prompt("Enter the limit "))

// if(n<=0){
//     console.log("Enter a positive number ")
// }
// else{
//     for(let i=0;i<=n;i++){
//         console.log(fibo(i))
//     }
// }

// factorial of a number with and without recrussion

// without recrussion

// let n=parseInt(prompt("Enter the number "))
// let fact=1
// for(let i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log(fact)

// with recrussion

// function factorial(num){
//     if(num==0 || num==1) return 1
//     else{
//         return num*factorial(num-1)
//     }
// }
// let n=parseInt(prompt("Enter the number "))

// console.log(factorial(n))

// scope variable

// local variable

// function msg(){
//     let a="wow" // local variable
//     console.log(a)
// }
// msg()
// console.log(a) this will throw an error as 'a' is a local variable

// global variable

// let a="wow" // global variable
// function msg(){
//     console.log(a)
// }
// msg()
// console.log(a)

// block scope

// it restricts the variable 

// function add(n1,n2){
//     let res=n1+n2
//     console.log(res)
//     if(res>10){
//         let res1="greater than 10" // block scope variable
//         console.log(res)
//     }
// }

// console.log(res1) // this will throw an error as 'res1' is block scope variable
// add(9,5)

// ---------------
// s1=prompt("Enter the string 1 ")
// s2=prompt("Enter the string 2 ")
// function string_concat(str1,str2){
//     let final_string=str1+" "+str2;
//     console.log(final_string)
//     if(final_string.length>=5){
//         let len="greater than 10"
//         console.log(len)
//     }
// }

// string_concat(s1,s2)

// console.log(len)

// Javascript Objects
// A variable that stores multiple values-> key and value pair

// const student={
//     name:'pratyush',
//     age:23,
//     address:'bangalore'
// }
// console.log(student)
// accessing values using dot and bracket methods
// console.log(student.name)
// console.log(student['address'])

// operation
// 1.)modify

// student.age=24
// console.log(student)
// 2.)add

// student.job="developer"
// console.log(student)
// 3.)delete

// delete student.address
// console.log(student)

// nested object with values that has to be modified, deleted and added

// let person={
//     name:'pratyush',
//     contact:{
//         phone:1234567890,
//         email:"pratyush@gmail.com",
//         address:{
//             city:"Bangalore",
//             country:"India"
//         }
//     }
// }
// console.log(person)

// modify

// person.contact.phone=9876543210
// console.log(person)

// add

// person.contact.address.pincode=530068
// console.log(person)

// delete

// delete person.contact.email
// console.log(person)

// we can add a function inside an object thats called as method/ function
// key and value->property

// const student={
//     name:'pratyush',
//     age:23,
//     address:'bangalore',
//     msg:function(){
//         console.log("hello",this.name)
// }
// }
// student.msg()

// wap to display 5 employees with details using methods

// let emp1 = {
//     emp_id: 101,
//     emp_name: 'pratyush',
//     role: 'developer',
//     salary: 23000,
//     displaymsg: function () {
//         console.log("Employee 1 Details")
//         console.log("Employee ID:", this.emp_id)
//         console.log("Employee Name:", this.emp_name)
//         console.log("Employee Role:", this.role)
//         console.log("Employee Salary:", this.salary)
//     }
// }
// let emp2 = {
//     emp_id: 102,
//     emp_name: 'rahul',
//     role: 'tester',
//     salary: 20000,
//     displaymsg: function () {
//         console.log("Employee 2 Details")
//         console.log("Employee ID:", this.emp_id)
//         console.log("Employee Name:", this.emp_name)
//         console.log("Employee Role:", this.role)
//         console.log("Employee Salary:", this.salary)
//     }
// }
// let emp3 = {
//     emp_id: 103,
//     emp_name: 'Ram',
//     role: 'developer',
//     salary: 35000,
//     displaymsg: function () {
//         console.log("Employee 3 Details")
//         console.log("Employee ID:", this.emp_id)
//         console.log("Employee Name:", this.emp_name)
//         console.log("Employee Role:", this.role)
//         console.log("Employee Salary:", this.salary)
//     }
// }
// let emp4 = {
//     emp_id: 104,
//     emp_name: 'Tanmay',
//     role: 'HR',
//     salary: 24000,
//     displaymsg: function () {
//         console.log("Employee 4 Details")
//         console.log("Employee ID:", this.emp_id)
//         console.log("Employee Name:", this.emp_name)
//         console.log("Employee Role:", this.role)
//         console.log("Employee Salary:", this.salary)
//     }
// }
// let emp5 = {
//     emp_id: 105,
//     emp_name: 'Suraj',
//     role: 'Admin',
//     salary: 20000,
//     displaymsg: function () {
//         console.log("Employee 5 Details")
//         console.log("Employee ID:", this.emp_id)
//         console.log("Employee Name:", this.emp_name)
//         console.log("Employee Role:", this.role)
//         console.log("Employee Salary:", this.salary)
//     }
// }

// emp1.displaymsg()
// console.log()
// emp2.displaymsg()
// console.log()
// emp3.displaymsg()
// console.log()
// emp4.displaymsg()
// console.log()
// emp5.displaymsg()

// question 1

// let book={
//     title:"A Little Life",
//     author:"Hanya Yanagihara",
//     yearPublished:2015,
//     pages:720,
//     displayBookInfo:function(book){
//         console.log(`The Book ${this.title}, written by ${this.author} and published in ${this.yearPublished} has around ${this.pages} pages`)
//     }
// }

// book.displayBookInfo(book)

// question 2

// let movie={
//     title:'Bhediya',
//     director:'Amar Kaushik',
//     year:2022,
//     rating:4.4,

// }
// function updateMovie(movie){
//     movie.genre=["Horror","Thriller","Comedy","Action","Suspense"]
//     movie.rating=4.5
//     console.log(movie)
// }
// updateMovie(movie)

// question 3:
// create an array of objects where each object represents a person with properties for name and age writea function calculateAverageAge(people) that takes array as user 
// input and returns the average age of all the people

let sum;
let people=[{name:'pratyush',age:23},{name:'rahul',age:22},{name:'rohan',age:20}]
function calculateAverageAge(people){
    sum=0
    for(let i=0;i<people.length;i++){
        sum=sum+people[i].age;
    }
    console.log((sum/people.length).toFixed(2))
}
let avg=people
calculateAverageAge(avg)

// question 4:
// create a company object that contains an array of department where each department is an object with properties for name and employees. each employee is an object with properties for name and position. wriye a function add employee(company, departmentname,emplyee)

// let company = {
//     name: 'TCS',
//     department: [
//         {
//             dept_name: 'IT',
//             employee: [{ name: 'Pratyush', position: 'Developer' }, { name: 'rahul', position: 'tester' }]
//         },
//         {
//             dept_name: 'Sales',
//             employee: [{ name: 'Pratyush', position: 'Sales1' }, { name: 'rahul', position: 'Sales2' }]
//         },
//     ]

// }

// function addEmployee(company,dept_name,employee){
//     if(company.department.dept_name==='IT'){
//         company.department.employee.name="rohan"
//         company.department.employee.position="analyst"
//     }
//     console.log(company)
// }
// addEmployee('TCS','IT')
