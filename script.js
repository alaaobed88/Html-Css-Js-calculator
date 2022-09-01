//choosing elements
const clearAll = document.querySelector('[data-clear-all]');
const deleteButton = document.querySelector('[data-delete');
const equalsButton = document.querySelector('[data-equals]');
const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation');
const previousOperand = document.querySelector('[data-previous-operand');
const currentOperand = document.querySelector('[data-current-operand]');

class Calculator{
    constructor(previousOperand, currentOperand){
     this.previousOperand = previousOperand;
     this.currentOperand = currentOperand;
    }
 
    clearall(){
     this.previousOperand = '';
     this.currentOperand = '';
     this.operation = undefined;
    }

    delete(){

    }

    appendNumber(number){

    }
    
    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }
 }
 