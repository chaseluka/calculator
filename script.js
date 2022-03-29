const displayBox = document.querySelector('.display-text');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');
const backspaceBtn = document.getElementById('backspace');
const minusBtn = document.getElementById('minus');
const decimalBtn = document.getElementById('decimal');
const numberKey = document.querySelectorAll('.number');

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


//Clears the display so that the div has no text content.

clearBtn.addEventListener('click', clear, false);

function clear(){
    displayBox.textContent = '';
    newNum = '';
    storedNum = '';
}

let newNum = '';
let storedNum;
let opSelected = '';
let equalClick = 0;
let isMinus = '';
let minusClick = 0;
let decimalClick = 0;
let decimal = '.';

//Allows each button's number to be displayed when button clicked. Given that 
//querySelector returns a NodeList, which can use array.forEach to decipher the  
//number associated with the button and display its value.


numberBtn.forEach((number) => {
    number.addEventListener('click', () => inputNumber(number), false);
});

function inputNumber (number){
    if (equalClick || isNaN(newNum)){    //if equal button pressed, set newNum to be empty so user can input a number avoids string being added onto continously. Also, if newNum is a number from clicking 'backspace', set newNum to ''.
            newNum = '';
            decimalClick = 0;
    }

    if (minusClick){  //If minusBtn is clicked while newNum is NaN, newNum will add the minus value to the number. 
        newNum = isMinus;
        isMinus = '';
    }
    
    newNum += number.value;
    
    newNum = newNum.toString(); 
    if (newNum.length > 14){    //prevents numbers from flowing over the display when input.
        newNum = newNum.slice(0, -1);
    }
    
    newNum = parseFloat(newNum); //converts newNum from string to number.
    
    displayBox.textContent = newNum;
    
    equalClick = 0;
    minusClick = 0;
}


minusBtn.addEventListener('click', function(){
    if (newNum === '' || isNaN(newNum)){
        isMinus = '-';
        displayBox.textContent = isMinus;
        minusClick++;
    }
})

decimalBtn.addEventListener('click', decimalInput, false);

function decimalInput(){
    if (decimalClick < 1){
        decimalClick++;
        newNum = newNum.toString();
        newNum = newNum.concat(decimal)
        displayBox.textContent = newNum;
    }
}

operatorBtn.forEach((operator) => {
    operator.addEventListener('click', () => opBtnClicked(operator), false);
});

function opBtnClicked (operator){
    newNum = parseFloat(newNum);
    if (newNum && storedNum){  //If storedNum exists, it allows the operate() to be carried out when an operator btn is clicked again.
        equality();
    }
    storedNum = newNum;
    newNum = '';
    opSelected = operator.value;
    decimalClick = 0;
}

equalBtn.addEventListener('click', function(){
    ++equalClick;
    if (newNum !== undefined && storedNum !== undefined){
        equality();
        storedNum = '';

    }
});

function equality(){
    newNum = operate(opSelected, storedNum, newNum);
    if (newNum === Infinity){  //Prevents crashing when dividing a number by zero
        displayBox.textContent = 'Error';
        newNum = '';
        storedNum = '';
    }

    newNum = newNum.toString(); //long solutions are converted to scientific notation
    if (newNum.length > 14){
        newNum = parseFloat(newNum).toExponential(2);
    }
   
    if (displayBox.textContent === 'Error'){ //makes sure 'Error' is displayed if newNum = infiinity. 
        displayBox.textContent = 'Error';
    }
    else if (displayBox.textContent !== 'Error'){
        displayBox.textContent = newNum;
    }
}

backspaceBtn.addEventListener('click', backspace, false);

function backspace(){
    newNum = newNum.toString();
    newNum = newNum.slice(0, -1);
    displayBox.textContent = newNum;
    newNum = parseInt(newNum);
}

window.addEventListener('keypress', function(e){
    const numberKey = document.querySelector(`.number[data-key="${e.keyCode}"]`);
    number = numberKey;
    if (numberKey){
        inputNumber(number);
    }
    console.log(e);

    const operatorKey = document.querySelector(`.operator[data-key="${e.keyCode}"]`);
    operator = operatorKey;
    if (operatorKey){
        opBtnClicked(operator);
    }

    const equalKey = document.querySelector(`#equal[data-key="${e.keyCode}"]`);
    if (equalKey){
        ++equalClick;
        if (newNum !== undefined && storedNum !== undefined){
            equality();
            storedNum = '';
        }
    }

    const decimalKey = document.querySelector(`#decimal[data-key="${e.code}"]`);
    if (decimalKey){
        decimalInput();
    }


});

window.addEventListener('keydown', function(e){
    const backspaceKey = document.querySelector(`#backspace[data-key="${e.keyCode}"]`);
    if (backspaceKey){
        backspace();
    }

    const clearKey = document.querySelector(`#clear[data-key="${e.code}"]`);
    if (clearKey){
        clear();
    }
    
});