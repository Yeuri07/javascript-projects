// DOM elements
    // 1. Display
const displayFirstTextElement = document.querySelector('[display-first]');
const displaySecondTextElement = document.querySelector('[display-second]');


    // 2. Buttons
const numberButtons = document.querySelectorAll('[number]');
const operador = document.querySelectorAll('[operador]');
const operadorDel = document.querySelector('[operador-del]');
const allClearButtons = document.querySelector(".all-clear");
const equalsButtons = document.querySelector(".all-clear");

// constructor

class Calculator {
    constructor(displayFirstTextElement,displaySecondTextElement){
        this.displayFirstTextElement = displayFirstTextElement;
        this.displaySecondTextElement = displaySecondTextElement;

       this.allCrear();
    }

    allCrear(){

        this.firstOperand = '';
        this.secondOperand = '';
        this.operador = undefined;
    }

    deleteDigit(){
    
        this.secondOperand = this.secondOperand.slice(0,-1);
    }

    appendDigit(digit){
        if(digit === '.' && this.secondOperand.includes('.')) return;
        if(digit === '0' && this.secondOperand === '0') return;
        if(digit === '.' && this.secondOperand === '') this.secondOperand ='0';
        this.secondOperand = this.secondOperand + digit;
       
    }

    selectOperando(){

    }

    calculate(){

    }

    updateDisplay(){
        this.displayFirstTextElement.innerText = this.secondOperand;
        
    }

    equals(){

    }
}

//Class calculator

const calculator = new Calculator(displayFirstTextElement, displaySecondTextElement);

// event listeners

allClearButtons.addEventListener('click', () =>{
    calculator.allCrear();
    calculator.updateDisplay();
})

operadorDel.addEventListener('click',()=>{
    calculator.deleteDigit();
    calculator.updateDisplay();
})

numberButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.appendDigit(button.innerText);
        calculator.updateDisplay();
    })
})