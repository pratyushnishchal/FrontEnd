// String is immutable
let str="Hello World"
console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])
console.log(str[4])
console.log(str[5])
console.log(str.length)

let fname="Pratyush"
let lname="Nishchal"
console.log(fname+" "+lname)

console.log(`My name is ${fname} ${lname}`)

let b="Abcdefghijk"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
console.log(b.slice(1,3))
console.log(b.slice(1))

console.log(b.replace("Ab","12"))
console.log(b.concat(" "," Hello ",str))
// The charAt() method returns the character at a specified index (position) in a string:
console.log(b.charAt(0))
let c=b.charAt(100)
if(c=' '){
    console.log("index not found")
}
// The at() method returns the character at a specified index (position) in a string.
console.log(b.at(3))
console.log(b[3])
console.log(b.indexOf("d"))
console.log(b.startsWith("A",0))
/*
substring() is similar to slice().
The difference is that start and end values less than 0 
are treated as 0 in substring().
*/
console.log(b.substring(1,4))
/* substr() is similar to slice().
The difference is that the second parameter 
specifies the length of the extracted part.
*/
console.log(b.substr(6,4))

let str1="     abcd      "
console.log(str1.length)
console.log(str1.trim().length)
console.log(str1.trimStart().length)
console.log(str1.trimEnd().length)

// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) 
// until it reaches a given length.
let text="3"
let padded_start=text.padStart(5,"0")
console.log(padded_start)

// Note:The padStart() method is a string method.
// To pad a number, convert the number to a string first.
let num=5
let t=num.toString()
let num_pad=t.padStart(4,"0")
console.log(num_pad)