function sub(){

let name=document.getElementById("name1").value
let age=document.getElementById("age1").value
let email=document.getElementById("email1").value

class Student{
    constructor(name,age,email){
        this.name=name;
        this.age=age
        this.email=email
    }
    displayMess() {
        document.getElementById("display").innerHTML=`Name of the Student is <b>${this.name}</b> age of student is <b>${this.age}</b> and email id of student is <b>${this.email}</b>`
    }
}
let s=new Student(name,age,email);
s.displayMess()
}