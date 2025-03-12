let arr = [[1,0],[2,3],[4,5]];

const flattendArray = arr.reduce(
    (previousValue, currentValue) => previousValue.concat(currentValue) ,[]
);



let favColors = [ "red", "Green" , "blue"]

favColors[4] = "green"

console.log(favColors)
console.log (typeof(favColors))//thisis also an object

console.log(favColors[0])
console.log(flattendArray)