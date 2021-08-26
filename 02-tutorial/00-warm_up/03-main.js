/**
 * getElementById
 * Returns an HTMLElement type pointing to the first element asked for.
 * HTMLinputelement is a built-in interface has a property 'value'.
 * @param 'num1' specifies the first number to catch.
 */
var firstN = document.getElementById('num1');
// ! indicates ts to always loop for the value
var secondN = document.getElementById('num2');
var btn = document.querySelector('button');
function addition(n1, n2) {
    return (n1 + n2);
}
btn.addEventListener('click', function () {
    console.log(addition(+firstN.value, +secondN.value));
});
