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
//Arithmetic operator
//addition multiplication subtraction division modulus increment decrement

let increment = mynum + 1;
console.log(increment);
console.log("divide", mynum / 2);
console.log("multiple", mynum * 2);
console.log("subtract", mynum - 2);
console.log("modulus", mynum % 2);

//loose equality == VS strict Equality ===
const n = 33;
console.log(n == "33");
console.log(n === 33);

let nub = "34";
console.log(nub, typeof nub);
let re = String(nub);
console.log(re, typeof re);
let str = "karim";
console.log(str, typeof str);
let ras = Number(str);
console.log(ras, typeof ras);
var user1 = parseInt(prompt("enter a number"));
console.log("your number", user1);
//array collection of data
let aray = ["karim", "bs", "it", "math"];
console.log(aray);
console.log(aray.join("-"));
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = a1.join(a2);
console.log(a3);
console.log(aray.indexOf("bs"));
console.log(a1.concat(a2));
let str1 = "karim";
let str2 = "mullah";
console.log(str1.concat(str2));
console.log(str1.length);
console.log(aray.length);
//loop control flow
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let nu = 2;
for (let i = 0; i <= 5; i++) {
  console.log("multiple", nu, "*", i, "=", nu * i);
}

let dish = ["chat", "baryani", "samosa", "qurma"];
for (let i = 0; i < dish.length; i++) {
  console.log(dish[i]);
}

const arr = [
  [12, 45, 75],
  [54, 45, 2],
  [23, 54, 75, 2],
];

const max = Math.max(...[].concat(...arr));

const min = Math.min(...[].concat(...arr));

console.log(max);

console.log(min);
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 0);

//condition statment

let age=20;
if(age>20)
{
    console.log("you are eligible")
}
else
{
    console.log('you are not eligible')
}
