const person = {
    firstName : 'Steve',
    lastName : 'Smith',
    age : 36,
    email : 'steve@smt.com',

    address : {
        city : 'Kuala Lumpur',
        state : 'Kuala Lumpur'
    },
    hobbies : ['music','sports','food'],
}

let val;

// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.address['state'];

const users = [
    {name:'Alex', age:31},
    {name:'Sara', age:28},
    {name:'Kim', age:25}
];

for(let i=0 ; i<users.length ; i++){
    console.log(users[i].age);
}

// console.log(users);
// console.log(person);
// console.log(val);