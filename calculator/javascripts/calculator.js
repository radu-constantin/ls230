function performOperation(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else if (operator === '*') {
        return num1 * num2;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector("form");
    let result = document.querySelector('#result');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let firstNum = form.querySelector('#first-number').value;
        let secondNum = form.querySelector('#second-number').value;
        let operator = form.querySelector('#operator').value;

        result.innerHTML = performOperation(firstNum, secondNum, operator);
    })
}) 