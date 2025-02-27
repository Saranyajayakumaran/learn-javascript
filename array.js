let arr = [[1,0],[2,3],[4,5]];

const flattendArray = arr.reduce(
    (previousValue, currentValue) => previousValue.concat(currentValue),[]
);


console.log(flattendArray)