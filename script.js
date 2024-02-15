let displayValue = "0";
let isResultDisplayed = false;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (isResultDisplayed) {
        clearDisplay();
        isResultDisplayed = false;
    }

    if (displayValue === "0" && value !== ".") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
        isResultDisplayed = true;
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
        isResultDisplayed = true;
    }
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
    isResultDisplayed = false;
}
