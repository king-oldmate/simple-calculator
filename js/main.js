let firstNumber = ''
let secondNumber = ''
let negativeTrack = 1
let decimalTrack = false
let operationTrack = 0
let result
let oldResult

window.addEventListener('keydown', calcInput)

function calcInput(e){
	if (operationTrack === 0){ //getting the digits for the first number
        if (firstNumber.length === 0 && e.key === '-'){ //adds a multiplier of -1 if - key is pressed
            negativeTrack *= -1
            firstNumber += e.key
        } else if(e.key>= 0 && e.key <=9) { //concatenates the digits into a string
            firstNumber += e.key
            //console.log('1st: ' + firstNumber)
            document.querySelector('.calculatorEntry').innerText = firstNumber
        } else if (e.key === '.' && decimalTrack === false){ //adds a decimal point. the decimalTrack variable allows this to only happen once
            firstNumber+= e.key
            decimalTrack = true
        } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' && firstNumber.length >0){ //this complete the first number, specifies the operation for later, and moves on to start concatenating for the second number
            operationTrack = e.key
            e.preventDefault()
            document.querySelector('.calculatorEntry').innerText += operationTrack
            decimalTrack = false
        }
  } else {
    if (secondNumber.length === 0 && e.key === '-'){
            negativeTrack *= -1
            secondNumber += e.key
        } else if(e.key>= 0 && e.key <=9) {
            secondNumber += e.key
            //console.log('2nd: ' + secondNumber)
            document.querySelector('.calculatorEntry').innerText = firstNumber + operationTrack + secondNumber
        } else if (e.key === '.' && decimalTrack === false){
            secondNumber+= e.key
            decimalTrack = true
        }else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' ||   e.key === 'Enter' && secondNumber.length >0){ //completes the second number
            //console.log(firstNumber + operationTrack + secondNumber + '=')
        }
  }
  if (operationTrack != '0' && e.key === '=' || e.key === 'Enter'){ //final result checks to see what operation is stored and then applies it to the two variables, giving a result
        if (operationTrack === '+') {
            result = Number(firstNumber)+Number(secondNumber)
            console.log(result)
        } else if (operationTrack === '-') {
            result = Number(firstNumber)-Number(secondNumber)
            console.log(result)
        } else if (operationTrack === '*') {
            result = Number(firstNumber)*Number(secondNumber)
            console.log(result)
        } else if (operationTrack === '/') {
            result = Number(firstNumber)/Number(secondNumber)
            console.log(result)
        }   document.querySelector('.calculatorResult').innerText = result
            firstNumber = '' // all the variables are cleared at the end
            secondNumber = ''
            negativeTrack = 1
            decimalTrack = false
            operationTrack = 0
            oldResult = result //except this, which can be used for an answer key
            result = 0
    }  
}

function keyPressed(e) { //this handles the key highlighting
    if (e.key === 'Enter'){ //this makes it so enter is visually recognised as =
        console.log('eh')
        document.querySelector(`.key[data-key="="]`).classList.add('pressed')
        // document.querySelector(`.key[data-key="="]`)
    } else {
        const calcKey = document.querySelector(`.key[data-key="${e.key}"]`)
        calcKey.classList.add('pressed')
    }
}
function keyReleased(e){
    if (e.key === 'Enter'){
        console.log('eh')
        document.querySelector(`.key[data-key="="]`).classList.remove('pressed')
        // document.querySelector(`.key[data-key="="]`)
    } else {
        const calcKey = document.querySelector(`.key[data-key="${e.key}"]`)
        calcKey.classList.remove('pressed')
    }
}
window.addEventListener('keydown',keyPressed)
window.addEventListener('keyup', keyReleased)

// document.querySelector('.calculatorEntry').innerText = firstNumber, operationTrack, secondNumber

// document.querySelector('.calculatorResult').innerText = result