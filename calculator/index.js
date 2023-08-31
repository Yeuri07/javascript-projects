// DOM elements
    // 1. Display
const displayFirstTextElement = document.querySelector('.display-first');
const displaySecondTextElement = document.querySelector('.display-second');


    // 2. Buttons
const numberButtons = document.querySelectorAll('[number]');
const operador = document.querySelectorAll('[operador]');
const operadorDel = document.querySelector('[operador-del]');
const allClearButtons = document.querySelector(".all-clear");
const equalsButtons = document.querySelector(".equals");


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
        this.operation = '';
       
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

    selectOperando(operation){
        
       
        if(this.secondOperand === '' && operation === '-'){
            this.appendDigit(operation);
            return;
        }
        if(this.secondOperand === '-') return;
        if(this.firstOperand !== '') this.calculate();

        this.operation = operation;
        this.firstOperand = this.secondOperand;
        this.secondOperand = '';
    }

    calculate(){
      let result;
      const first = parseFloat(this.firstOperand);
      const second = parseFloat(this.secondOperand);
      console.log(first)
      console.log(second)
      if(isNaN(second) || isNaN(first)) return;

      switch (this.operation){
        case '+':
            result = first + second; break;
        case '-':
            result = first - second; break;
        case '÷':
            result = first / second; break;
        case '*':
            result = first * second; break;

        default: return;
      }

      this.secondOperand = result.toString();
      this.operation = '';
      this.firstOperand = '';
    }

    updateDisplay(){
        this.displayFirstTextElement.innerText = this.secondOperand;
        if(this.firstOperand !== ''|| allClearButtons){ 
            
        this.displaySecondTextElement.innerText = `${this.firstOperand} ${this.operation}`;
    };
    
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

operador.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.selectOperando(button.innerText);
        calculator.updateDisplay();
    })
} )

equalsButtons.addEventListener('click' ,()=>{
    calculator.calculate();
    calculator.updateDisplay();
})