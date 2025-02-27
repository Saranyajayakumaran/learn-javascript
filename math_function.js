var x = Math.floor(Math.random());
console.log(x)
if(x>0.5){
    var x=1;//global scope
}else{
    let x=2;//block scope
}

console.log(Math.floor(2.99))
console.log(Math.random())
console.log(x);