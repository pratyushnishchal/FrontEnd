// prototype
// 
// function person(name,age){
//     this.name=name,
//     this.age=age
//     this.greet=function(){
//         console.log("welcome",this.name)
//     }
// }
// let p1=new person("pratyush",23)
// p1.greet()
// person.prototype.displayAge=function(){
//     console.log("hey your age is",this.age)
// }
// p1.displayAge()

// prototype chaining
// function supertype(){
//     this.name="pratyush",
//     this.displayName=function(){
//         console.log("My name is",this.name)
//     }
// }

// function subclass(){
//     this.age=23
// }
// subclass.prototype=new supertype()
// subclass.prototype.displayAge=function(){
//     console.log("age",this.age)
// }
// let p1=new subclass();
// console.log(p1.name)
// p1.displayName()
// p1.displayAge()

// wap to print an object with one method inside and anther method external

// let emp={
//    name:"Rahul",
//    age:23,
//    display:function(){
//     console.log("Name", this.name,"and age", this.age)
//    } 
// }

// function greet(){
//     console.log("Hello")
// }
// emp.display()
// greet()

// function student(id,name,age){
//     this.id=id
//     this.name=name
//     this.age=age
//     this.displayMess=function(){
//         console.log("ID:",this.id)
//         console.log("Name:",this.name)
//         console.log("Age:",this.age)
//     }
// }

// function display(){
//     let s=new student(1,"Rahul",18)
//     s.displayMess()
// }

// display()

// wap for prototype chainig for designing a car

// function Vechile(){
//     this.year=2005
// }

// function Car(name,brand){
//     this.name=name
//     this.brand=brand
// }

// Vechile.prototype.color="red"

// Car.prototype=new Vechile()
// Car.prototype.display=function(){
//     console.log("Name of the car:", this.name)
//     console.log("Brand:",this.brand)
//     console.log("Year:",this.year)
//     console.log("Color:",this.color)
// }

// let c=new Car("Maruti Swift", "Maruti Suzuki")
// c.display()

// 
// class supertype{
//     constructor(){
//         this.name="Pratyush"
//     }
//     displayName(){
//         console.log("Name:",this.name)
//     }
// }
// class subclass extends supertype{
//     constructor(){
//         super()
//         this.age=23
//     }
//     displayAge(){
//         console.log("Age",this.age)
//     }
// }
// let s1=new subclass()
// s1.displayName()
// s1.displayAge()

// 

// class Vechile{
//     constructor(){
//         this.year=2005
//     }
// }

// class Car extends Vechile{
//     constructor(){
//         super()
//         this.name="Maruti Swift"
//         this.brand="Maruti Suzuki"
//     }
// }

// Vechile.prototype.color="red"

// Car.prototype.display=function(){
//     console.log(`Name of the car: ${this.name}`)
//     console.log(`Brand: ${this.brand}`)
//     console.log(`Year: ${this.year}`)
//     console.log(`Color: ${this.color}`)
// }

// let c=new Car()
// c.display()