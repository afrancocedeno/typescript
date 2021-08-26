#!/usr/bin/env node

const firstNumber = process.argv[2];
const secondNumber = process.argv[3];

/**
 * '=='     equal to
 * '==='    equal value and equal type
 * '!='     not equal
 * '!=='     not equal value or not equal type
 */
function add (n1, n2) {
  if (typeof (n1) === Number || typeof (n2) === Number) {
    return (n1 + n2);
  } else {
    // '+' converts the datatype
    return (+n1 + +n2);
  }
}

console.log(add(firstNumber, secondNumber));
