function addition(a, b){
    return a + b;
}
function subtraction(a, b){
    return a - b;
}
function multiplication(a, b){
    return a * b;
}
function division(a, b){
    return a / b;
}

const firsNumber = + prompt('Enter the first number:');
const secondNumber = + prompt('Enter the second number:');

alert ('Addition: '  + addition (firsNumber, secondNumber) +
    '\nSubtraction: '  + subtraction (firsNumber, secondNumber) +
    '\nMultiplication: '  + multiplication (firsNumber, secondNumber) +
    '\nDivision: '  + division (firsNumber, secondNumber));



