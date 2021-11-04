const displayText = document.querySelector(".display-text");

const numberButtons = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");

// Add number button event listeners
for (let i = 0; i < numberButtons.length; i++) {
  const button = numberButtons[i];

  button.addEventListener("click", () => {
    if (displayText.innerText === "0") {
      displayText.innerText = button.id;
    } else {
      displayText.innerText += button.id;
    }
  });
}

// Add operator button event listeners
for (let i = 0; i < operatorButton.length; i++) {
  const button = operatorButton[i];
  const operator = button.id;
  console.log(operator);

  button.addEventListener("click", () => {
    switch (operator) {
      case "clear":
        displayText.innerText = "0";
        break;

        case "del":
            let string = displayText.innerText;
            string = string.split("");
            string.pop();
            string = string.join("");
            displayText.innerText = string;
            if (string === "") {
                displayText.innerText = "0";
            }
            break;
        
    }
  });
}

let string = "2124";
string = string.split("");
string.pop();
string = string.join("");
console.log(string);