var data=[10,20,30,40,50,60,70,80];
var largestValue;
var element;
var lowest;

function getLargestValue(data)
{
    for( let i=0;i<data.length;i++)
    {
        largestValue=data[0];   // Imagine first value as largest
        element=data[i];
       if(element>largestValue)
       {
        largestValue=element;

       }
       
        
    }
   return largestValue;
   
}

function getLowestValue(data)
{
    for(let i=0;i<data.length;i++)
    {
        // Main Logic of the code
        lowest=data[0];
        element=data[i];
        // condition
        if(element<lowest)
        {
            lowest=element;
        }
    }
    return lowest;
}
console.log("Value :"+data);
console.log("Largest Value :"+getLargestValue(data));
console.log("Lowest Value :"+getLowestValue(data));