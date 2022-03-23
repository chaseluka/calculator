let displayBox = document.querySelector('.display');
const btn1 = document.querySelector('button');
const clearBtn = document.getElementById('clear')

//Functions for each basic math operator for to be called later on.  

function add(num1, num2) {
    return num1 + num2;
}


function subtract(num1, num2) {
    return num1 - num2;
}


function multiply(num1, num2) {
    return num1 * num2;
}


function divide(num1, num2) {
    return num1 / num2;
}

//Operate function allows intake of two numbers and an operator, which calls the
//appropraite operator function so that any two numbers can be used for each operator.

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

const numbers = [
    {number: '0', value: 0},
    {number: '1', value: 1},
    {number: '2', value: 2},
    {number: '3', value: 3},
    {number: '4', value: 4},
    {number: '5', value: 5},
    {number: '6', value: 6},
    {number: '7', value: 7},
    {number: '8', value: 8},
    {number: '9', value: 9},
];

btn1.addEventListener('click', function(){
    displayBox.textContent += '1'
});

clearBtn.addEventListener('click', function(){
    displayBox.textContent = ''
});