// Create arrays

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array (22,45,33,76,54);
const fruit = ['Apple', 'Kiwi', 'Banana', 'Orange','Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1,b:2}, new Date()];

let val;

// Get array lenght
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];
val = numbers[0];

// Insert a number
numbers[1] = 100;

// Find index f value
val = numbers.indexOf(44);

// Mutating Array

// Add on to end
numbers.push(300);

// add on front
numbers.unshift(100);

// reove the last value
numbers.pop();

// remove the first value 
numbers.shift();

// splice value
numbers.splice(1,3);

// Reverse
numbers.reverse();

// concatenate arrays
val = numbers.concat(numbers2);

// sortinhg arrays
fruit.sort();

// val = numbers.sort(function(x,y){
//     return x-y;
// });
// val.reverse();

function over50(num){
    return num >50;
}

val = numbers.find(over50);
// pritnt undefined because here us no object more than 50


console.log(numbers);
// console.log(numbers2);
console.log(fruit);
// console.log(mixed);
console.log(val);




