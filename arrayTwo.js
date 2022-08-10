var array =[10,20,30,40,50]
let add=0;
var add2=0;
var add3=0;
// Array Element Fetching through For Loop
console.log("===================== Data Fetching From Array =====================");
console.log("============================ For Loop ==============================");

for(let i=0;i<array.length;i++)
{
    var result=array[i];
    console.log(result);
}
console.log("============================ For Of Loop ===========================");
for(let result of array)
{
 
    //   var data = array[result];
      console.log(result);
     
   
}

console.log("============================ For in Loop ===========================");
for(let index in array)
{
    var data = array[index];
    console.log(" Index: "+index+ "   ||   Index-Data: "+data);
    
      
     
   
}

//sum of array
console.log("========================== Sum of array ================================");
console.log("============================ For Loop ===========================");
for(let i=0;i<array.length;i++)
{
     add += array[i];
   
}
console.log(array);
console.log( "Sum: "+add);
console.log("============================ For in Loop ===========================");
for(let i in array)
{ 
     add2 += array[i];
   
}
console.log(array);
console.log( "Sum: "+add2);
console.log("============================ For of Loop ===========================");
for(let i of array)
{ 
    add3 += i;
   
}
console.log(array);
console.log( "Sum: "+add3);