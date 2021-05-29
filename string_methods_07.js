const firstName = 'Will';
const lastName = 'Smith';
const  age = 45;
const str = 'Hello my name is Alex';
const tags = 'We design, we developer, programming';

let output;

output = firstName + lastName;

// Contatination
output = firstName + ' ' + lastName;

// Append
output = 'Alex ';
output += 'Smith';

output = 'Welcome to Redbeat Academy' +firstName + ' ' +lastName;

// Escaping use \ for the contanation
output = 'That\'s awesome, I can\'t wait';

// Lenght
output = firstName.length;
// print will be 4

// concat method
output = firstName.concat(' '+lastName)

// Change case
output = firstName.toUpperCase();
output = firstName.toLowerCase();

// How to get certain character from string
// counting starts from 0
output = firstName[2];

// indexOf()
// counting starts from 0
// it looks for the first(character)
// will
output = firstName.indexOf('W');
output = firstName.lastIndexOf('l');

// chartAt(
output = firstName.charAt('2');

// Get the last char
output = firstName.charAt(firstName.length -1); 

// Substrings()
// first number is the staring point and second number is the ending point
// ending point won't be included
output = firstName.substring(0,4);

// slice()
output = firstName.slice(0,4);
output = firstName.slice(-3);

// split
output = str.split(' ');
output = tags.split(',');

// replace()
output = str.replace('Alex', 'William');

// include() - print as true
output = str.includes('name')

console.log(output);