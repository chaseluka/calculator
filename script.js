const displayBox = document.querySelector('.display');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.getElementById('clear')

//Functions for each basic math operator to be called later on.  

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

function operate (operator, num1, num2){
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

//Clears the 
clearBtn.addEventListener('click', function(){
    displayBox.textContent = ''
});

numberBtn.forEach((number) => {
    number.addEventListener('click', function() {
        displayBox.textContent += number.value;
    })
});
  

operatorBtn.forEach((operator) => {
    operator.addEventListener('click', function() {
        displayBox.textContent += operator.value;
    })
});