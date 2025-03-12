// conditional statemnets
let condition = true;

// single line of code ( no need of curly braces otherwise use curly braces)
//if(condition) 
    //console.log("condition:True");
//else
    //console.log("condition :False");


   /* let isRaining = true;
    let isCloudy = true;

    if(isRaining || isCloudy){
        console.log("Dont forget to take umbrella");
    } else {
        console.log("Sky is normal , no need of umbrella");
    }*/


// if hour is between 12Am to 1pm print good morning
// Else if hour is between 1pm to 5pm  good afternoon
// Else hour  is between 5pm to 12 pm good evening


let hour = new Date().getHours();

console.log(hour)


if(hour >= 0 && hour < 13)
    console.log("good morning");
else if(hour >= 13 && hour < 17 )
    console.log("good afternoon");
else
    console.log("Good evening");


