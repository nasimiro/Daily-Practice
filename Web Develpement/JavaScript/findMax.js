var firstNumber =190;
var secondtNumber =290;
var thirdNumber =895;

console.log(Math.max(firstNumber,secondtNumber,thirdNumber));

if(firstNumber>secondtNumber && firstNumber>thirdNumber){
    console.log('First number is bigger');
}
else if(secondtNumber>firstNumber && secondtNumber>thirdNumber){
    console.log('Second number is bigger');
}
else{
    console.log('Third number is bigger');
}
