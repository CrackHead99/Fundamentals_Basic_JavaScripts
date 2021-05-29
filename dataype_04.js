// There are 2 types of datatype
// 1) Primitive 2)Reference

// Primitive
// They are accessed by their value

// String
// Sequence of characters
const name = 'Alex'

// number
// decimals, intergers, .... all consider as number
const age = 23 ;

// boolean
// true or false (need to be lowercase)
const isMember = false;

// undefined
// has no value (all variables ae undefined by default)
let test;
let gender;

// null
// intentionally empty value
const car = null;

// symbol
// ES6
const sym = Symbol();

// Reference Type : Objects , Array

const cars = ["Honda","Honda","Renault","Tesla"];
const numbers = [1,2,3,4];
const data = [1, "students", 100, true];

// Object literal

const address = {
    city : "Boston" ,
    state : "MA"
};

// Built in Object
const today = new Date();

console.log(name);
console.log(age);
console.log(isMember);
console.log(test);
console.log(null);
console.log(sym);
console.log(cars)
console.log(numbers);
console.log(data);
console.log(address);
console.log(today);