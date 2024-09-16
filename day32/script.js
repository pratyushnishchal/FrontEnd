// local storage

// localStorage.setItem('company_name','Excelr')
// let a=localStorage.getItem('company_name')
// console.log(a)
// document.getElementById('localdemo').innerHTML=a
// session storage

// sessionStorage.setItem('trainer_name','rahul')
// let b=sessionStorage.getItem('trainer_name')
// console.log(b)
// document.getElementById("sessiondemo").innerHTML=b


// wap using session storage where you should get the details of student like student_name, course_name, place_name it should be stored on sessionStorage and display the same in browser

// function sub(){
//     let student_name=document.getElementById("s_name").value;
//     let course_name=document.getElementById("c_name").value;
//     let place_name=document.getElementById("p_name").value;
//     sessionStorage.setItem('student_name',student_name)
//     let storedvalue1=sessionStorage.getItem('student_name')
//     sessionStorage.setItem('course_name',course_name)
//     let storedvalue2=sessionStorage.getItem('course_name')
//     sessionStorage.setItem('place_name',place_name)
//     let storedvalue3=sessionStorage.getItem('place_name')
//     document.getElementById("dis").innerHTML="Student name is "+storedvalue1+" , Course name is "+storedvalue2+" , Place name is "+storedvalue3 
// }

// cookie

// document.cookie='name=Pratyush'
// let a=document.cookie
// console.log(a)

// create a form where data should go and sit in the cookie and bring that data back to the browser

// function sub1(){
//     let student_name=document.getElementById("s_name").value;
//     let student_age=document.getElementById("s_age").value;
//     let student_email=document.getElementById("s_email").value;
//     let course_name=document.getElementById("c_name").value;
//     let place_name=document.getElementById("p_name").value;
//     let a=document.cookie=`${student_name}`
//     let b=document.cookie=`${student_age}`
//     let c=document.cookie=`${student_email}`
//     let d=document.cookie=`${course_name}`
//     let e=document.cookie=`${place_name}`
//     document.getElementById("dis1").innerHTML="Student name is "+a+" Age is "+b+" email id is "+c+" course name is "+ d+" place name is "+e
// }

// function callDb(){
//     setTimeout(()=>{
//         console.log("I am happy about todays class"),5000
// })
// }

// callDb()

// wap to print even number immediatly and take 2 sec to print od number using callback function
