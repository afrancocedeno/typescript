/**
 * @ Author: Your name
 * @ Create Time: 2021-08-03 10:52:44
 * @ Modified by: Your name
 * @ Modified time: 2021-08-09 10:07:55
 * @ Description:
 */

// number
function add(number1: number, number2: number) {
  /*   if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new Error("no datatype ALLOWED");
  } */
  return number1 + number2;
}
const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log("number: " + result);

// string
function concatenate(string1: string, string2: string) {
  return string1 + string2;
}

const str1 = "data";
const str2 = "Type";
const fullString = concatenate(str1, str2);
console.log("string: " + fullString);

// boolean
function checker(input: boolean) {
  if (input == true) {
    console.log("PASSED");
  } else {
    console.log("%c FAILED", "background: #222; color: #bada55");
  }
}

checker(false);

// object - dictionary(py)

// difference between obj: object = {} and obj: {} = {} and obj = {}
const obj: {
  /* only 'object' would be any type, it needs key: type
  types representation of an object type */
  name: string;
  age: number;
} = {
  name: "Alejandro",
  age: 26,
};

console.log(obj.name);

// barFoo
const person = {
  name: "Alejo",
  age: 30,
  hobbies: ["SWIM", 50],
};

// strict array type
let fooBar: string[];
fooBar = ["Hola", "Mundo"];

// flexible array type
let barFoo: any[] = ["Hola", "Mundo", 32];

for (let index = 0; index < barFoo.length; index++) {
  const element = barFoo[index];
  console.log(element);
}

// the same as
for (const index of barFoo) {
  console.log(index);
}

// Tuple - an array with a fixed ammount and type of elements
const tpl: [string, number] = ["alejo", 26];
const tpl1: {
  key0: [string, number];
  key1: [boolean, string];
} = {
  key0: ["hola", 26],
  key1: [true, "chao"],
};

console.log("before push " + tpl);
tpl.push("hello");
console.log("after push " + tpl);

// enum

// Any
