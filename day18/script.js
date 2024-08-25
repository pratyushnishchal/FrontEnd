// Arithmetic Opertor

let a=10
let b=5
console.log("the value of a is ",a)
console.log("the value of b is ",b)
console.log("addition=",a+b)
console.log("substraction=",a-b)
console.log("division=",a/b)
console.log("multiplication=",a*b)
console.log("exponent=",a**b)
console.log("modulus=",a%b)

// Assignment operator

let x=10
let y=5
console.log("the value of x is ",x)
console.log("the value of y is ",y)
console.log("+=",a+=5)
console.log("-=",a-=5)
console.log("*=",a*=5)
console.log("/=",a/=5)
console.log("**=",a**=2)
console.log("%=",a%=5)

// conditional operator

let x1=10
let x2=5
let x3='10'
console.log("the value of x1 is ",x1)
console.log("the value of x2 is ",x2)
console.log("==",x1==x3)
console.log("!=",x1!=x2)
console.log(">",x1>x2)
console.log("<",x1<x2)
console.log(">=",x1>=x2)
console.log("<=",x2<=x2)
console.log("===",x1===x3)

// logical operator

let a1=true
let a2=true
let a3=true
let a4=false
let a5=false
let a6=true
let a7=false
let a8=false
console.log("AND")
console.log("true && true",a1&&a2)
console.log("false && true",a3&&a4)
console.log("true && false",a5&&a6)
console.log("false && false",a7&&a8)
console.log("OR")
console.log("true || true",a1||a2)
console.log("false || true",a3||a4)
console.log("true || false",a5||a6)
console.log("false || false",a7||a8)
console.log("NOT")
console.log("!true",!a1)
console.log("!false",!a8)

// bitwise operator
// AND
// 1024&64
// 1024 512 256 128 64 32 16 8 4 2 1
// 1 0 0 0 0 0 0 0 0 0 0
// 0 0 0 0 1 0 0 0 0 0 0
// -----------------------
// 0 0 0 0 0 0 0 0 0 0 0
// 0
console.log(1024&64)
// OR
// 1224|56
// 1024 512 256 128 64 32 16 8 4 2 1
// 1 0 0 1 1 0 0 1 0 0 0
// 0 0 0 0 0 1 1 1 0 0 0
// -------------------------
// 1 0 0 1 1 1 1 1 0 0 0
// 1272
console.log(1224|56)
// NOT
// ~164
// 128 64 32 16 8 4 2 1
// 1 0 1 0 0 1 0 0
// 0 1 0 1 1 0 1 1
// -64+16+8+2+1=-165
console.log(~164)
// RIGHT SHIFT
// a>>b
// formula->a/2^b
//1022>>2

// 512 256 128 64 32 16 8 4 2 1
// 1 1 1 1 1 1 1 1 1 0
// 0 1 1 1 1 1 1 1 1 1->1st
// 0 0 1 1 1 1 1 1 1 1->2nd
// -----------------------
//255
console.log(1022>>2)

//135>>4

// 128 64 32 16 8 4 2 1
// 1 0 0 0 1 0 1 1
// 0 1 0 0 0 1 0 1->1st
// 0 0 1 0 0 0 1 0->2nd
// 0 0 0 1 0 0 0 1->3rd
// 0 0 0 0 1 0 0 0->4th
// --------------------
// 8
console.log(135>>4)

// LEFT SHIFT
// a<<b
// formula->a*2^b

// 127<<4
// 64 32 16 8 4 2 1
// 1 1 1 1 1 1 1
// 1 1 1 1 1 1 0->1ST
// 1 1 1 1 1 0 0->2ND
// 1 1 1 1 0 0 0->3RD
// 1 1 1 0 0 0 0->4TH
console.log(127<<4)
// 99<<2
// console.log(99<<2)
// 64 32 16 8 4 2 1

console.log(~800)