var data=[1,2,3,4,5,6,7,-8,8,40,60,-70]

for(let i=0;i<data.length;i++)
{
    if(data[i]>=0)
    {
        if(data[i]<0)
        {
            continue;
        }
        else{
            console.log(data[i]);
        }
       
    }
    
}


