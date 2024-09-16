function validateForm(){
    let data=document.getElementById("em1").value
    let userid=document.getElementById("uid").value
    console.log(data);
    let mail=data.split('@')
    console.log(mail)
    let domain=mail[1].split('.')
    console.log(domain)
    if(domain[0]=="gmail" && data.includes("@") && userid.length>=4 && userid.length<=15){
        document.getElementById("val").innerHTML="You have entered Valid email id and userid"
        window.location.href = "sub.html";
    }
    else if(domain[0]=="yahoo" && data.includes("@") && userid.length>=4 && userid.length<=15){
        document.getElementById("val").innerHTML="You have entered Valid email id and userid"
        window.location.href = "sub.html";
    }
    else{
        document.getElementById("val").innerHTML="Invalid email id or userid"
    }
}
// function validateForm1(){
//     let userid=document.getElementById("uid").value
//     if(userid.length>=4 && userid.length<=15){
//         console.log('Valid user id')
//         for(let d in userid){
//             console.log(userid[d])
//             if()
//         }
//     }
//     else{
//         console.log("its not a valid userid")
//     }
// }