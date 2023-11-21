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


/**
 * @tutorial - casting in TS
 */
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

/**
 * @tutorial - null vs undefined
 */
(() => {
  // right way to initialize in Ts
  let myNullNumber: number | null = null
  let myUndefinedNumber: number | undefined = undefined

  /* function sayHello(name: string | null) {
    let hello = 'Hi! '
    if (name) {
      return hello += name
    }
    return hello += 'nobody'
  } */
  function sayHello(name: string | null) {
    let hello = 'Hi! '
    // hello += name? name : 'nobody'
    return hello += name || 'nobody'
  }


  console.log(sayHello('Alejo'));
  // console.log(sayHello(null));
})();

/**
 * @tutorial - return in functions
 *
 */
(() => {
  const getTotalAssets = (assets: number[]): number => {
    let total: number = 0
    assets.forEach(e => total += e)
    return total
  }
  const printUserAssets = (assets: number[]): void => {
    const total = getTotalAssets(assets)
    console.log('total is; ' + total);
  }

  printUserAssets([100, 2000, 5000])
})();

const rta = 1 + '1'
console.log(rta);

/* object type */
type Investment = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  initialAmmount: number
  period: number
  futureValue: number
}

type User = {
  id: string
  name: string
  lastname: string
  role: "admin" | "user"
  datebirth: Date
  assets: Investment[]
  visible: boolean
  createdAt: Date
  updatedAt: Date
}

