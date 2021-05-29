const color = 'red';

switch (color){
    case 'red' :
        console.log('Color is red')
    break;
    case 'green':
        console.log('Color is green')
        break;
        case 'yellow':
            console.log('Color is yellow')
        break;
        default:
            console.log('Color is not green, red and yellow');
            break;
}


let day;

switch( new Date().getDay() ){
    case 0 :
        day = 'Sunday'
        break;
    case 1 :
        day = 'Monday'
        break;
    case 2 : 'Tuesday'
        break;
    case 3 :
        day = 'Wednesday'
        break;
    case 4 :
        day = 'Thursday'
        break;
    case 5 : 'Friday'
        break;   
    case 6 : 'Saturday'
        break;
}

console.log(`Today is ${day}`);