var data=" Hi dear! how are you ? ";
console.log("========================== Normal String Fetching ==========================");
// String Characture Fetch
for(let i=0;i<data.length;i++)
{
    var value=data[i];
    console.log(value);
}
console.log("========================== Normal String Reverse ==========================");
// String Reverse
for(let i=data.length-1;i>0;i--)
{
    var value=data[i];
    console.log(value);
}
console.log("========================== String Reverse by split ==========================");
console.log(Math.random()*10);

var x = 70;
var y = 6;
var z = "30";

console.log((x/y)) ;
console.log((x/y).toPrecision()) ;
console.log((x/y).toPrecision(3)) ;
console.log((x/y).toPrecision(2)) ;
console.log((x/y).toPrecision(1)) ;
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
// Iterates over array elements
for(var fruit of fruits) {    
    console.log(fruit + "<br>"); // Print array element
}