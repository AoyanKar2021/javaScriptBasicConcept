var result=[10,20,30,40,50,60,70];
var copy=result.splice(1,5) //  1= from/start   ||  5 = How many will remove from the array
console.log("Old Array: "+result);
console.log(" After Remove: "+copy);

// splice() will affect the main array
// return deleted data into a new array