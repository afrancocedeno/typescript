function sum(par) {
  console.log(arguments);
  // console.log(`result ${arguments[0] + arguments[1]}`);
  console.log(`result ${par.num1 + par.num2}`);
}

// sum(num1 = 2, num2 = 5);
sum({ num1: 2, num2: 5 });

let myObject = {
  a: 1,
  b: 2,
  c: 'hello',
  d: function (params) { console.log('soy una funcion'); },
  e: true,
  f: { f1: 'i am f1', f2: 'i am f2', f3: () => { } }
}

console.log(myObject);
const objToString = JSON.stringify(myObject)
console.log(objToString);
const strToObj = JSON.parse(objToString)
console.log(strToObj);

