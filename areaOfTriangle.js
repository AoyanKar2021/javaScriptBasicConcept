

function area( valueOne,valueTwo,valueThree)
{
    var semiPerimeter=(valueOne+valueTwo+valueThree)/2;
    var rone=semiPerimeter-valueOne;
    var rtwo=semiPerimeter-valueTwo;
    var rthree=semiPerimeter-valueThree;
    var area= Math.sqrt(semiPerimeter*rone*rtwo*rthree) ;
    return area;
}

console.log(area(5,6,7));



