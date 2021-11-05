// DOM Selectors

const numberButtons = document.querySelectorAll(".number-button");
const mathOperatorButtons = document.querySelectorAll(".math-operator");
const specialOperatorButtons = document.querySelectorAll(".special-operator");

const num1 = document.querySelector(".num1-text");
const operator = document.querySelector(".operator-text");

const num2 = document.querySelector(".num2-text");

let isNum1 = true;

// Functions

function checkIsNum1() {
  if (operator.innerText == "") {
    isNum1 = true;
  } else {
    isNum1 = false;
  }
}

function calculate(number1, thisOperator, number2) {
  number1 = parseInt(number1, 10);
  number2 = parseInt(number2, 10);

  switch (thisOperator) {
    case "+":
      return (number1 + number2).toString();
      break;

    case "-":
      return (number1 - number2).toString();
      break;

    case "/":
      return (number1 / number2).toString();
      break;

    case "*":
      return (number1 * number2).toString();
      break;
  }
}

function canCalculate() {
  if (num1.innerText && operator.innerText && num2.innerText) {
    return true;
  } else {
    return false;
  }
}

// Event listeners

// Numbers
for (let i = 0; i < numberButtons.length; i++) {
  const thisButton = numberButtons[i];

  thisButton.addEventListener("click", () => {
    checkIsNum1();

    if (isNum1) {
      num1.innerText += thisButton.innerText;
    } else {
      num2.innerText += thisButton.innerText;
    }
  });
}

// Math operators
for (let i = 0; i < mathOperatorButtons.length; i++) {
  const thisButton = mathOperatorButtons[i];

  thisButton.addEventListener("click", () => {
    operator.innerText = thisButton.innerText;
  });
}

// Special operators
for (let i = 0; i < specialOperatorButtons.length; i++) {
  const thisButton = specialOperatorButtons[i];
  const thisOperator = thisButton.innerText;

  switch (thisOperator) {
    case "=":
      thisButton.addEventListener("click", () => {
        if (canCalculate()) {
          num1.innerText = calculate(
            num1.innerText,
            operator.innerText,
            num2.innerText
          );
          operator.innerText = "";
          num2.innerText = "";
        }
      });
      break;
  }
}
