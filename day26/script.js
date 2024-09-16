// getElementById
// let text1=document.getElementById("para1").innerHTML
// console.log(text1)
// let text2=document.getElementById("para2").innerHTML
// console.log(text2)

// let text3=document.getElementsByTagName("p")[0].innerHTML
// console.log(text3)

// let col1=document.body.style.backgroundColor="red"
// let col2=document.getElementById("para2").style.color="white"


// question 2
// function myCol(){
//     let colvalue=document.getElementById("col").value
//     document.body.style.backgroundColor=colvalue;
// }

// question 1

function sub(){
    let name1=document.getElementById("name").value;
    let age1=document.getElementById("age").value;
    let email1=document.getElementById("email").value;
    let phone1=document.getElementById("phone").value;
    let add1=document.getElementById("add").value;
    document.getElementById("de1").innerHTML="Name:"+name1
    document.getElementById("de2").innerHTML="Age:"+age1
    document.getElementById("de3").innerHTML="Email:"+email1
    document.getElementById("de4").innerHTML="Phone number:"+phone1
    document.getElementById("de5").innerHTML="Address:"+add1
}
