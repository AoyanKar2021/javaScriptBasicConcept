
//  c/5 = f-32/9  c: celcious, f: farenheit

function toFarenheit(celciusValue)
{
    var farenheit=((celciusValue*9)/5)+32;

    return celciusValue+" degree C : "+ farenheit+" degree F  ";
}
function toCelcius(farenheitValue)
{
    var celcius=((farenheitValue-32)*5)/9;

    return farenheitValue+" degree F : "+ celcius+" degree C  ";
}
console.log(toFarenheit(37));
console.log(toCelcius(37));