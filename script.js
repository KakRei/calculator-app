const num1 = document.getElementById('num1'),
      num2 = document.getElementById('num2'),
      result = document.getElementById('result');

function add() {
     result.textContent = parseInt(num1.value) + parseInt(num2.value);
     num1.value = '';
     num2.value = '';
     return;
}

function sub() {
    result.textContent = parseInt(num1.value) - parseInt(num2.value);
    num1.value = '';
    num2.value = '';
    return;
}

function multi() {
    result.textContent = parseInt(num1.value) * parseInt(num2.value);
    num1.value = '';
    num2.value = '';
    return;
}

function divi() {
    result.textContent = parseInt(num1.value) / parseInt(num2.value);
    num1.value = '';
    num2.value = '';
    return;
}