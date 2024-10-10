import { addTokenToStorage } from './storage.js';
import { add } from './calculator.js';
import { divide } from './calculator.js';

const someNumber = 2;
if (someNumber === 2) {
    console.log('The number is 2');
}
console.log(add(someNumber, 3));

const userInput = {num1: 1, num2: 0};

try {
    divide(userInput.num1, userInput.num2);
} catch (e) {
    if (e.message === 'Cannot divide by zero') {
        console.error('You cannot divide by zero');
    }
    console.error(e.message)
}

addTokenToStorage('34dfgdfgdf0403gdfdsfsdfs23');



const message = document.getElementById('message').value;

function showAlert() {
    alert(message);
}
showAlert();