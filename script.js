const displayBox = document.querySelector('.display');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.getElementById('clear')
const equalBtn = document.getElementById('equal');

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

clearBtn.addEventListener('click', function(){
    displayBox.textContent = '';
});

let newNum = '';
let storedNum;
let opSelected = '';

//Allows each button's number to be displayed when button clicked. Given that 
//querySelector returns a NodeList, which can use array.forEach to decipher the  
//number associated with the button and display its value.

numberBtn.forEach((number) => {
    number.addEventListener('click', function() {
        newNum += number.value;
        newNum = Number(newNum); //converts newNum from string to number.
        console.log(newNum);
    })
});
  

operatorBtn.forEach((operator) => {
    operator.addEventListener('click', function() {
        if (newNum && storedNum){  //If storedNum exists, it allows the operat() to be carried out when an operator btn is clicked again.
            equality();
            console.log('hello'); 
        }

        storedNum = newNum;
        console.log(storedNum);
        newNum = '';
        opSelected = operator.value;
        
        
    })
});

equalBtn.addEventListener('click', function(){
    equality();
    
});

function equality(){
    newNum = operate(opSelected, storedNum, newNum);
    newNum = Number((newNum).toFixed(8)); //Rounds decimal to only 8 spots.
    console.log(newNum);

}