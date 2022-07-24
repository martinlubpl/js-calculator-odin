let firstNum = '';
let secondNum = '';
let operator = '';
let nextOperator = '';
const current = document.querySelector('.current')
const history = document.querySelector('.history')


function add(n1, n2) {
    return n1 + n2
}
function subtract(n1, n2) {
    return n1 - n2
}
function multiply(n1, n2) {
    return n1 * n2
}
function divide(n1, n2) {
    return Math.round(n1 / n2 * 1000000) / 1000000
}

function operate(n1, n2, operator) {
    switch (operator) {
        case "+":
            return add(n1, n2)
            break;

        case "-":
            return subtract(n1, n2)
            break;

        case "*":
            return multiply(n1, n2)
            break;

        case "/":
            return divide(n1, n2)
            break;

        default:
            break;
    }
}

const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        if (operator == '') {
            firstNum += this.id;
        } else {
            secondNum += this.id;
        }
        updateDisplay();
    })
}
const operators = document.querySelectorAll('.operator');
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        if(!operator) {
            operator = this.id;
            updateDisplay();
        } else {
            let result = operate(Number(firstNum), Number(secondNum), operator);
            nextOperator = operator;
            updateDisplay(result=result);
        }
        
    })
}

const equals = document.querySelector('.equals')
equals.addEventListener('click', function () {
    if (firstNum && secondNum) {
        let result = operate(Number(firstNum), Number(secondNum), operator);
        updateDisplay(result=result);
    }
})




function updateDisplay(result=0) {
    if (operator == '') {
        current.innerText = firstNum;
    } else if (!result) {
        history.innerText = firstNum + operator;
        if (secondNum) current.innerText = secondNum;
    } else {
        if (nextOperator) {
            history.innerText = result + operator;
            nextOperator = '';
        } else {
            history.innerText = firstNum + operator + secondNum + "=";
        }
        
        current.innerText = result;
        firstNum  = result;
        operator = '';
        secondNum = '';
    }
}