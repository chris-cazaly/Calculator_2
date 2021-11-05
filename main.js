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
  if ((operator.innerText == "")) {
    isNum1 = true;
  } else {
    isNum1 = false;
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
  console.log(thisButton.innerText);

  thisButton.addEventListener("click", () => {
    operator.innerText = thisButton.innerText;
  });
}
