// let theater={
//     t_name:"Gopalan Cinemas - Innovation Mall",
//     location:"4th, Gopalan Innovation Mall, Bannerghatta Rd, near JAYADEVA HOSPITAL, opp. Shoppers Stop",
//     rating:4.1,
//     display:function(){
//         console.log("Theater name: ",this.t_name)
//         console.log("Location: ",this.location)
//         console.log("Rating: ",this.rating)
//     }
// }

// let movie={
//     movie_name:"Bheed",
//     duration:"2h 4m",
//     rel_date:2023,
// }
// let pr=theater.display.bind(theater);


// constructors:

function emp(emp_id,emp_name,age,gender,role){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.age=age;
    this.gender=gender;
    this.role=role;
}

emp.prototype.display=function(){
    console.log("Employee ID: "+this.emp_id)
    console.log("Employee Name: "+this.emp_name)
    console.log("Employee Age: "+this.age)
    console.log("Gender: "+this.gender)
    console.log("Role: "+this.role)
}
let dis=new emp(101,"ABC",24,"male","developer")
dis.display()