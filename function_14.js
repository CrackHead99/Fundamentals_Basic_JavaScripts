// Function Declaration

function greet (name){
//     // console.log('Welcome to RBA')
//     // return 'Welcome to RBA';
    console.log('Welcome' + ' ' + name);
}
// greet('Alex');

// function add (a,b){
//     return a+b
// }

function Welcome (){
    console.log('Welcome to RBA')
}
Welcome();

// function greet (firstName = 'Alex', lastName = 'Smith'){
//     // if(typeof firstName === 'undefined') {firstName = 'Alex'}
//     // if(typeof lastName === 'undefined') {lastName = 'Smith'}
//     return 'Hello ' + firstName + ' ' + lastName;
// }

greet('Sara' + ' ' + 'Brown');
// console.log(add(5,3));


// Function Expression

 // const add = function (a,b){
 //     return a+b
 // }

 const square = function (x){
     return x*x;
}

console.log(square(5));

// Immediate invokable function expression (IIFEs)

(function (){
    console.log('IIFEs Ran...')
})();

(function (name){
    console.log('Good' + ' ' + 'evening' + ' ' + name)
})('Zoe');

const todo = {

    add : function (){
        console.log('Add todo...')
    },
    edit : function (id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function (){
    console.log('Delete todo...')
}

console.log(todo);  
todo.add();
todo.edit(22);
todo.delete();