var data=['aoyan','rasel','foysal','kamrujjaman','foysal',"rabbi Islam Monir"];
let compare="";
var result;
for(let i=0; i<data.length;i++ )
{
    
    var element=data[i];
    if(compare.length<=element.length)
    {
       compare=element;
    }
   
}
console.log(compare);