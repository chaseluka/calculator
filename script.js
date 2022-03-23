


function add(num1, num2) {
    return num1 + num2;
}
console.log(add());

function subtract(num1, num2) {
    return num1 - num2;
}
console.log(subtract());

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply());

function divide(num1, num2) {
    return num1 / num2;
}

console.log(divide());

function operate (num1, num2, operator){
    switch (operator){
        case '+': 
            return add(num1, num2);
        case '-': 
            return subtract(num1, num2);
        case '*': 
            return multiply(num1, num2);
        case '/': 
            return divide(num1, num2)
    }
};

console.log(operate());
