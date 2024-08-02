const display = document.getElementById('display');

function appendValue(value) {
    display.innerText += value;
}

function clearDisplay() {
    display.innerText = '';
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}