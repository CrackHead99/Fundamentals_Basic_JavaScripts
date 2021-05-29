let val; 

const today = new Date();
let birthday = new Date ('9-19-1990 11:25:00');
birthday = new Date ('September 10 1990');
birthday = new Date ('10/09/1990');

// GET MONTH (countinng starts from 0)
val=today.getMonth();

// Get day of the month
val=today.getDate();

// Get day of the week 
// counting starts from 0 (Sunday)
val=today.getDay();

// Get the full year
val=today.getFullYear();

val=today.getHours();
val=today.getMinutes();
val=today.getSeconds();

// Get the time value in miliseconds
val=today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setSeconds(3);


// console.log(today);
// console.log(val);
console.log(birthday);
