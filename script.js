let prevNumber = ``
let calculationOperator = ``
let currentNumber = `0`

const inputNumber = (number) => {
    if(currentNumber === `0`){
        currentNumber = number
    }else{
        currentNumber += number
    }
}
const operators = document.querySelectorAll(`.operator`)

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ``
}

const calculatorScreen = document.querySelector(`.calculator-screen`)

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        updateScreen(currentNumber)
    })
    
})
