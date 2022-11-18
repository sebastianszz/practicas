const previousValue = document.getElementById('previous-Value');
const currentValue = document.getElementById('current-Value');
const buttonsNumbers = document.querySelectorAll('.numbers');
const buttonOperators = document.querySelectorAll('.operator');

const display = new Display(previousValue,currentValue);

buttonsNumbers.forEach(button =>{
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

buttonOperators.forEach(button =>{
    button.addEventListener('click', () => display.compute(button.value))
})