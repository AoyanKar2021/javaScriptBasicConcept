// Gets user input
var numberOne = prompt("Enter First Number");
var numberTwo = prompt("Enter Second Number");

function  multiplication (numberOne,numberTwo)
{
    var result=numberOne*numberTwo;
    return result;
}
function  Division (numberOne,numberTwo)
{
    if(numberOne>numberTwo)
    {
        var result=numberOne/numberTwo; 
        
    }
    else{
        var result=numberTwo/numberOne;
    }
    
    return result;
}



console.log("Multiplication :"+multiplication(numberOne,numberTwo));
console.log("Divition :"+Division(numberOne,numberTwo));