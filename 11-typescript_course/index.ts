//@ts-check
console.log("Hello via Bun!");

/**
 * static code analisys
*/


(() => {
  console.log('self executed arrow function');
})()

const hex = 0xfff
const bin = 0b10100

let bar = undefined
bar = 1
bar = 'hello'

const foo = (bar as string).toLowerCase()
console.log(foo);

const foox = <string>bar
console.log("second " + foox);


/**
 * @tutorial - union types
 */
(() => {
  function validateUserId(uid: string | number | boolean) {
    if (typeof uid === "string") {
      console.log('is string');

    } else if (typeof uid === "number") {
      uid
      console.log('is number: ' + uid.toFixed(2));
    } else {
      console.log('is boolean: ' + uid);
    }
  }
  let uid: string | number | boolean
  uid = 123456.2238634
  validateUserId(uid)
  uid = "iushpiou3bnXpish"
  validateUserId(uid)
})();

/**
 * @tutorial - alias type
 */
(() => {
  type UserId = string | number | boolean

  function validateUserId(uid: UserId) {
    if (typeof uid === "string") {
      console.log('is string');

    } else if (typeof uid === "number") {
      uid
      console.log('is number: ' + uid.toFixed(2));
    } else {
      console.log('is boolean: ' + uid);
    }
  }
  let uid: UserId
  uid = 123456.2238634
  validateUserId(uid)
  uid = "iushpiou3bnXpish"
  validateUserId(uid)
})();

/**
 * @tutorial - literal type
 */
(() => {
  let shirtSizes: 'S' | 'M' | 'L'
  // /* ERROR */ shirtSizes = 'hello'

  // better
  type Sizes = 'S' | 'M' | 'L'
  let availableSize: Sizes
})();
