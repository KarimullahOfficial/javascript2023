console.log("hello world");
// variable constant and comment
// variable redecaler and reintilization
var a = 34;
var a = 45;
console.log(a);
console.log(a);
// we can not redeclare the but we can reassign value
let b = 4;
b = 5;
console.log(b);

// const
const c = 8;

console.log(c);

//there are 7 datatype
//int 1,2324, can store data type
//string  "123", "karimulllah"
//boolen true/ false
//null special  value absence
//Undefine declare but  not initial
//symbol define
//object
console.log("hello");
const firstname = "KARIM";
const lastname = "ullah";
console.log(firstname, lastname);
//Method 1 concat
console.log(firstname + lastname);
//method2 uisng template literls

const fullname = `Full Name ${firstname} ${lastname}`;
console.log(fullname);

// string tolowercase

console.log(firstname.toLowerCase());
console.log(lastname.toUpperCase());
console.log(lastname.indexOf("a"));
let hobbies = "   coding reading running  ";
let result = hobbies.trim();
console.log(hobbies);
console.log(result);
console.log(hobbies.indexOf("reading"));
console.log(hobbies.includes("coding"));
let nam = "karimullah";

console.log("original string =", nam);
console.log("extract string", nam.slice(0, 3));

let color = "gray, white, black";
//string to array
console.log(color.split("."));
console.log(color, typeof color);

//number
let mynum = 34;
console.log(mynum, typeof mynum);
