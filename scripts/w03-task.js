/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector(`#add1`).value);
    let addNumber2 = Number(document.querySelector(`#add2`).value);
    document.querySelector(`#sum`).value = add(addNumber1, addNumber2);
}
document.querySelector(`#addNumbers`).addEventListener(`click`, addNumbers);
/* Function Expression - Subtract Numbers */

const subAnswer = function (number1, number2) {
    return number1 - number2;
}

const subNumbers = function () {
    let subnumbers1 = Number(document.querySelector("#subtract1").value);
    let subnumbers2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subAnswer(subnumbers1, subnumbers2);
}
document.querySelector("#subtractNumbers").addEventListener(`click`, subNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => (number1 * number2);

const mNum =  () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener(`click`, mNum);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => (number1 / number2);

const divNum = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener(`click`, divNum);


/* Decision Structure */
let currentDate = getFullDate()


/* ARRAY METHODS - Functional Programming */

let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.getElementById(array);
arrayElement.textContent = numArray

/* Output Source Array */

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numArray.filter(number => number % 2 !== 0);


/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
