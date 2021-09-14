function calculate(number1, number2) {
    number1 = Math.pow(number1, 2);
    number2 = Math.pow(number2, 2);
    let number = number1 + number2;
    return Math.pow(number, 2);
}

let calculate1 = function (number1, number2) {
    number1 = Math.pow(number1, 2);
    number2 = Math.pow(number2, 2);
    let number = number1 + number2;
    return Math.pow(number, 2);
};

let calculate2 = (number1, number2) => {
    number1 = Math.pow(number1, 2);
    number2 = Math.pow(number2, 2);
    let number = number1 + number2;
    return Math.pow(number, 2);
};

console.log(calculate(1, 1));
console.log(calculate1(1, 1));
console.log(calculate2(1, 1));