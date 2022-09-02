class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
     this.previousOperandTextElement = previousOperandTextElement
     this.currentOperandTextElement = currentOperandTextElement
     this.clear()
    }
 
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = ''
    }

    delete() {
       this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }

    appendNumber(number) {
        if(number === '.' && this.currentOperand.toString().includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
   
    

    chooseOperation(operation) {
    if(this.currentOperand === '') return
    if (this.previousOperand != ''){
        this.compute()
    }

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
    }

    compute() {
    let computation
    let previous = parseFloat(this.previousOperand)
    let current = parseFloat(this.currentOperand)
    if(isNaN(previous) || isNaN(current)) return  
    switch (this.operation){
    case '+':
    computation = previous + current
    break;
    case '-':
    computation = previous - current
    break;
    case '*':
    computation = previous * current
    break;
    case '÷':
    computation = previous / current
    break;
    default: 
    return
    }
    this.currentOperand = computation
    this.operation = ''
    this.previousOperand = ' '
    
    
    }

    updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innerText = this.previousOperand + this.operation
    
  
        
         
        
    }
    }
 

 
 //choosing elements
const allClearButton = document.querySelector('[data-clear-all]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
 
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

 numberButtons.forEach(button => {
    button.addEventListener('click', () => {
   
    calculator.appendNumber(button.innerText)
    let appendcounter = 0
    appendcounter++
    calculator.updateDisplay()
    })
 }) 

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    
    
    })
 }) 

 equalsButton.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
    })

    allClearButton.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
    })
 
    deleteButton.addEventListener('click', () => {
        calculator.delete()
        calculator.updateDisplay()
    }  )