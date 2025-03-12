// Boolean and other data types
//Check the data types and evelueate in truthy and falsy mechanism

// 1. checks both are boolean
//2. if is there any one is strring or other data type, print same value


console.log(false||'saran');

//falsy
//undefined
//null
//0
//false
//' -> ""
//NaN ( not a number)


// Truthy -> anything that is not falsy is truthy


let userColor = true;
let defaultColor ="blue";
let currentColor =userColor || defaultColor

console.log(currentColor);

