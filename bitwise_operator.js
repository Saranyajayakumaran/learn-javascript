//Bitwise operator
//Human code to machine code

// | Check the position of bit and if it is true(1) then prints the actual bitwise number

console.log(1 | 2); // Bitwise OR

console.log(1 & 2); // binary 1 0001  // binary 2 0010(Both the position of binary must be true or False)


// Chec if thr given number is oodd or even


function isEven(num){
    return(num & 1) === 0;
}

console.log(isEven(4));// Checks last bit is 0 or 1 (binary 0100)
console.log(isEven(5));// Checks last bit is 0 or 1 (binary 0101)

//If last bit is 0 the number is even(true) and if the last bit is 1 then the number is odd(false)