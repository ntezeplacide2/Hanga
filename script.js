function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    document.getElementById("display").value += operator;
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
