/**
 * getElementById
 * Returns an HTMLElement type pointing to the first element asked for.
 * HTMLinputelement is a built-in interface has a property 'value'.
 * @param 'num1' specifies the first number to catch.
 */
const firstN = document.getElementById("num1")! as HTMLInputElement;

// ! indicates ts to always loop for the value
const secondN = document.getElementById("num2")! as HTMLInputElement;
const btn = document.querySelector("button");

function addition(n1: number, n2: number) {
  return n1 + n2;
}

btn.addEventListener("click", function () {
  console.log(addition(+firstN.value, +secondN.value));
});
