
// Simple Interest
function interest( principle,time_Period)
{
    const interestRate=1.8;
    var yearlyinterest= ((interestRate*principle)/100);
    var interest=yearlyinterest*time_Period;

     return "Principle: "+principle+ " Taka  "+"||   Years: "+time_Period+ "  || "+ "You have to pay: "+interest+" Taka  ||  Yearly interest rate 1.8 and yours:   "+yearlyinterest;
}

console.log(interest(1000,5));