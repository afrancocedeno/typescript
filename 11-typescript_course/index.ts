//@ts-check
// console.log("Hello via Bun!");

/**
 * static code analisys
*/


(() => {
  // console.log('self executed arrow function');
})()

const hex = 0xfff
const bin = 0b10100

let bar = undefined
bar = 1
bar = 'hello';


/**
 * @tutorial - casting in TS
 */
// const foo = (bar as string).toLowerCase()
// console.log(foo);

// const foox = <string>bar.toUpperCase()
// console.log("second " + foox);


/**
 * @tutorial - union types
 */
(() => {
  function validateUserId(uid: string | number | boolean) {
    if (typeof uid === "string") {
      // console.log('is string');

    } else if (typeof uid === "number") {
      uid
      // console.log('is number: ' + uid.toFixed(2));
    } else {
      // console.log('is boolean: ' + uid);
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
      // console.log('is string');

    } else if (typeof uid === "number") {
      uid
      // console.log('is number: ' + uid.toFixed(2));
    } else {
      // console.log('is boolean: ' + uid);
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


  // console.log(sayHello('Alejo'));
  // // console.log(sayHello(null));
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
    // console.log('total is; ' + total);
  }

  printUserAssets([100, 2000, 5000])
})();

const rta = 1 + '1'
// console.log(rta);

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

export type User = {
  id: string
  name: string
  lastname: string
  role: "admin" | "user"
  datebirth: Date
  assets?: Investment[]
  visible: boolean
  createdAt: Date
  updatedAt: Date
}

let users: User[] = []
let investments: Investment[] = []

users.push({
  id: "af21fb78-896e-11ee-b9d1-0242ac120002",
  name: "Alejandro",
  lastname: "Franco",
  role: "admin",
  datebirth: new Date("01/31/1995"),
  visible: true,
  createdAt: new Date(),
  updatedAt: new Date(),
})

// console.log(users);


/**
 * @tutorial - Enum advanced types
 */
enum ROLES {
  ADMIN = "admin",
  USER = "user",
  CUSTOMER = "customer"
}

type User1 = {
  username: string
  role: ROLES
}

const newUser: User1 = {
  username: "alsohuman",
  role: ROLES.ADMIN,
};

/**
 * @tutorial - tuple
 */
(() => {
  let typedArray: (string | number)[] = []
  typedArray = ['hello', 1, 2, 4]
  let fixedTuple: [string, boolean, ROLES]
  fixedTuple = ["real_state", true, ROLES.ADMIN]

  // destrusturing tuples
  const [tValue1, tValue2] = fixedTuple
  // console.log(tValue1);
  tValue1.toUpperCase()
  //
})();

/**
 * @tutorial - unknown type
 */
(() => {
  let anyVar: any
  anyVar = 1
  anyVar = "dos"
  anyVar = true
  anyVar = {}
  anyVar = []
  // anyVar.toUpperCase()


  let unknownVar: unknown
  unknownVar = 1
  unknownVar = "dos"
  unknownVar = true
  unknownVar = {}
  unknownVar = []
  // unknownVar.toUpperCase()
  if (typeof unknownVar === "string") {
    unknownVar.toUpperCase()
  } else if (typeof unknownVar === "boolean") {
    const newVar: boolean = unknownVar
  }
  // return an unknown insted of any in functions
  ((): unknown => {
    return
  })()
})();


/**
 * @tutorial - never type = endless functions
 * stops the thread pool engine
*/
(() => {
  const endless = () => {
    while (true) {
      // console.log('endless');
    }
  }
  const fail = (message: string) => {
    throw new Error(message)
  }
  // fail('failed')
})();

// validate array type
// Array.isArray(['hello']): boolean // returns true or false
// console.log(Array.isArray(['hello']));

/**
 * @tutorial - noulish coalescing for optional parameters
 * operator || issue with falsy values like:
 * 0 === false
 * '' === false
 * false === false
*/
(() => {
  const createProduct = (
    id: string,
    name: string,
    ammount?: number,
    isNew?: boolean
  ) => {
    return {
      id,
      name,
      // ammount: ammount || 10 // for 0 value will be 10
      ammount: ammount ?? 10, // for 0 value will be 10
      // isNew: isNew || true // for false value will be true
      isNew: isNew ?? true // for false value will be true
    }
  }

  // console.log(createProduct('ab12', 'balon', 0, false));

  type Product = {
    id: string,
    name: string,
    ammount: number,
    isNew?: boolean
  }
  /* const createProduct1 = (params: Product) => {
    const { id,
      isNew,
      name,
      ammount } = params
    return {
      id,
      isNew,
      name,
      ammount,
    }
  }

  console.log(createProduct1('ab12', 'balonx', 5)); */
})();

/**
 * @tutorial - default values and still optional behavior
*/
const createProduct1 = (
  id: string,
  name: string,
  ammount: number = 10,
  isNew: boolean = true
) => {
  return {
    id,
    isNew,
    name,
    ammount,
  }
}
// console.log(createProduct1('ab12', 'balonx'));

/**
 * @tutorial - rest params
 * instead of make type validation guards for every single function parameter
 */
(() => {
  // in javascript
  // const myFunc = (...args) => {console.log(args)}
  // myFunc(1)

  enum ROLE {
    admin = 'admin',
    client = 'client',
    customer = 'customer'
  }

  type User = {
    username: string
    role: ROLE
  }

  const user: User = {
    username: 'afrancocedeno',
    role: ROLE.client
  }

  // lets say a funct looking for js flexibility and i want to validate 3 types of users but i need to validate a lot more users types
  const checkUserRoleV1 = (): number => {
    let expenseFlag = 0
    expenseFlag = user.role === ROLE.admin ? 1 : expenseFlag
    expenseFlag = user.role === ROLE.client ? 2 : expenseFlag
    expenseFlag = user.role === ROLE.customer ? 3 : expenseFlag
    return expenseFlag
  }
  // console.log(checkUserRoleV1());

  // know do the same with create a function for 5 types of cash movement
  enum EXPENSETYPE {
    donation = 'donation',
    education = 'education',
    entertainment = 'entertainment',
    freedom = 'freedom',
    mandatory = 'mandatory',
    shopping = 'shopping',
  }

  type Expense = {
    ammount: number
    type: EXPENSETYPE
  }

  const expense: Expense = {
    ammount: 30000,
    type: EXPENSETYPE.education
  }

  const checkExpenseTypeV1 = (): number => {
    let expenseFlag = 0
    expenseFlag = expense.type === EXPENSETYPE.donation ? 1 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.education ? 2 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.entertainment ? 3 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.freedom ? 4 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.mandatory ? 5 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.shopping ? 6 : expenseFlag
    return expenseFlag
  }
  console.log("checkExpenseType V1: " + checkExpenseTypeV1());

  const checkExpenseTypeV2 = (params: EXPENSETYPE[]): number => {
    let expenseFlag = 0
    expenseFlag = expense.type === EXPENSETYPE.donation ? 1 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.education ? 2 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.entertainment ? 3 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.freedom ? 4 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.mandatory ? 5 : expenseFlag
    expenseFlag = expense.type === EXPENSETYPE.shopping ? 6 : expenseFlag
    return expenseFlag
  }
  console.log("checkExpenseType V2: " + checkExpenseTypeV2([EXPENSETYPE.donation, EXPENSETYPE.education, EXPENSETYPE.entertainment]));

  const checkExpenseTypeV3 = (...params: EXPENSETYPE[]): boolean => {
    return params.includes(expense.type)? true: false
  }
  // the same for a functionality ondly for admins in the example of user role validation
  console.log("checkExpenseType V3: " + checkExpenseTypeV3(
    EXPENSETYPE.education,
  ));
})()
