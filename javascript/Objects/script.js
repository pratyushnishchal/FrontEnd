console.log("We are learning objects in JS")

// person object
const person={
    name:"Pratyush",
    age:23,
    phone:"samsung F23"
};
// car object
const car={
    name:'BMW',
    color:'Blue',
    price:"80Lakh"
};
// smart Phone object
const smartPhone1={
    name:"Samsung F23",
    price:18000,
    camara:'20MP',
    color:"blue"
};
console.log(smartPhone1.name)
console.log(smartPhone1.price)
// spread operator

// const smartPhone2={...smartPhone1,name:'Iphone 14 Pro max'};
// console.log("Smart Phone 2 Object \n",smartPhone2)

// object destructuring

const {name,price,camara,color}=smartPhone1

console.log(name,price,camara,color)
