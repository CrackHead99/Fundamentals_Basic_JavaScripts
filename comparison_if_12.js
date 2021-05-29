// if (something){
    // do something
// }else {
    // do something else
// } 

// comparisson operators
// (==, ===, <=, =>, !=, !==)

const id = 200;
// const id = 100;

// if(id==100){
//     console.log('Correct value');
// }else {
//     console.log("Wrong value")
// }

// // Equal (value)
// if(id==100){
//     console.log('Correct value');
// }else {
//     console.log('Wrong value')
// }

// // Not equal
// if(id !==101){
//     console.log('id is not 101');
// }else {
//     console.log('Try later...')
// }

// Equal value and type
// if (id === 100){
//     console.log('Type and value are equal');
// }else {
//     console.log('Type and value are not matched')
// }

// Test if undefined
// if(typeof id !=='undefined'){
//     console.log(`The id is ${id}`);
// }else {
//     console.log('No id');
// }

// Ternary version
// console.log( typeof id !=='undefined' ? `The id is ${id}`: 'No id');

// // Greater than & Less than
// if ( id <= 100){
//     console.log('correct');
// }else  {
//     console.log('Invalid id')
// }

// IF ELSE
// const color = 'yellow';

// if(color === 'red'){
//     console.log('red');
// }else if (color === 'blue'){
//     console.log('color is blue');
// }else if (color === 'yellow') {
//     console.log('color is yellow');
// }else {
//     console.log(['Invalid input']);
// }

// Logical operators

const name = 'Alex'
const age = 20;

// And &&
// (when use && bothh conditions need to be true)

// if (age > 0 && age <12){
//     console.log(`${name} is a child`);
// }else if( age >= 13 && age <=19) {
//     console.log(`${name} is a teenager`);
// }else {
//     console.log(`${name} is an adult`);     
// }

//  OR ||
if (age < 16 || age >65) {
    console.log(`${name} cannot run in a race`);
}else {
    console.log(`${name} is registered in the race`);
}

// Ternary operators
console.log (id === 100 ? 'correct' : 'invalid');

// Conditional statements without curly braces
if(id === 100)
console.log('Correct');
else
console.log('invalid')

