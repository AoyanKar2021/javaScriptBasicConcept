var data=["abdulla","Rusad","riad","rayhan","Sourov","sajid","riad","Rusad","abdulla"];
function checkDuplicate(data)
{
    let newData =[];
    for(let i=0;i<data.length;i++)
    {
       var d=data[i];
        if(newData.includes(d)===false)
        {
            newData.push(d); 
        }
    }
    return newData;
}
function doubleData(data)
{
    const a=[];
    const b=[];
    for(let i=0;i<data.length;i++)
    {
        var d=data[i];
        var result=(a.includes(d)===false) ? a.push(d):b.push(d);
    }
    return "Original Value a: - "+a+"      ||      Double value: - "+ b;

}
console.log(doubleData(data));

// console.log(checkDuplicate(data));