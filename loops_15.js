// For loop
// for (let i=0 ; i < 10 ; i++){

//     if(i === 2){
//         console.log('2 is my fav number'); 
//         // skips the iteration
//         continue; 
//     }

//     if (i === 5 ){
//         console.log('Stop the loop')
//         // break out of the loop
//         break;
//     }

//     console.log('Number ' + i);
// }

// While loop
// when you don't know how many iteration you have 

// let i = 0 ;

// while(i<10){
//     console.log('Number ' + i);
//     i++;
// }

// Do while
// always gonna run atleast once no matter what

// let i = 100;

// do {
//     console.log('Number '+i);
//         i++;
// }

// while(i<10);

// Loop through array

// const cars = ['Ford','Honda','Toyota','Proton'];
// const months = ['Jan','Feb','March','Apr'];

// for (let i = 0 ; i < cars.length ; i++){
//     console.log(cars[i]);
// }

// While loop

// let i = 0;
//     while(i<cars.length){

//         console.log(cars[i]);

//         i++;
//     }
    
    // forEach

    // cars.forEach(function(car, index, array) {  
        // console.log(car);
        // console.log(`${index} : ${car}`);
    //     console.log(`${array}`);
    // })

    // months.forEach(function(month){
    //     console.log(month);
    // })

    // Map
    // const users = [
    //     {id:1 , name:'Alex', age:32},
    //     {id:2 , name:'Sara', age:41},
    //     {id:3 , name:'Kim', age:50},
    //     {id:4 , name:'Zoe', age:24},
    // ]

    // const ids = users.map(function(user){
    //     return user.id;
    // });

    // const names = users.map(function(user){
    //     return user.name;
    // });

    // const age = users.map(function(user){
    //     return user.age; 
    // });

    // console.log(age);
    // console.log(names);
    // console.log(ids);

    // For in loop

    const user = {
        firstName : 'Alex',
        lastName: 'Smith',
        age:40
    };
    
    for(let i in user){
        console.log(`${i} : ${user[i]} `);
    }
    
    console.log(user);