let output;

// Number to string
output = String(555);
output= String (4+4);

// Boolean to string
output = String(true);
output = String(false);

// Date to string
output = String(new Date());

// Array to String
output = String([100, 45, 88, 4, 3]);

// toString
output = (5).toString();
output = (true).toString();

// String to number
output = Number('5');
output = Number(true);
output = Number(false)
output = Number(null);
output = Number('Hello');
output = Number([1,2,3,4]);

// Example
const val1 = String(5);
const val2 = 6;

const sum = Number(val1)+val2;
console.log(sum);


console.log(output);
console.log(typeof output);