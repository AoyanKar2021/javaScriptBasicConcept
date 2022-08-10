
// floor() toPricision()/ round()/toFixed()

let inch=12;
var studentHight=[60,64,80,88,70]
function  inchToFeet (hight){
    for(let i=0;i<hight.length ;i++)
{
    var inches=hight[i];
    var feet=(inches/12);
    var d=Math.floor(feet);
  
     if(inches % 12 !=0)
    {
     console.log(inches +" : "+d+" feet ,"+(inches%12)+" inch" );
    }
    else{
        console.log(inches +" : "+d+" feet " );  
    }   
}
}
inchToFeet(studentHight);