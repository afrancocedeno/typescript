/**
 * no matter if they are numbers or not
 */
const firstNumber = document.getElementById('num1');
const secondNumber = document.getElementById('num2');
const button = document.querySelector('button');

function add(n1, n2) {
  if (typeof (n1) === Number || typeof (n2) === Number) {
    return (n1 + n2);
  } else {
    return (+n1 + +n2);
  }
}

button.addEventListener('click', function () {
  console.log(add(firstNumber.value, secondNumber.value));
});
