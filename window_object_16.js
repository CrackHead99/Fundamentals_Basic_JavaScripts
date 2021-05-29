//Windows methods / objects / properties

// alert
// alert('Enter your password!');
// alert('Hello there!');

// prompt
// const input = prompt();
// alert(input);

// Confirm

// if(confirm('Are you sure?')){
//     console.log('yes');
// }else {
//     console.log('No');
// };

let val ;

// outter height and width 
val = window.outerHeight;
val= window.outerWidth;

// Inner height and width
val = window.innerHeight;
val= window.innerWidth;

// scroll points
val = window.scrollX;
val = window.scrollY;

// location object
val = window.location;
val = window.location.host;
val = window.location.port;
val = window.location.href;

// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();


// Navigator object 
val = window.navigator;
val =  window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val= window.navigator.language;

console.log(val);