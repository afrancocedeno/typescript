import { rejects } from "assert";
import { publicDecrypt } from "crypto";
import { resolve } from "dns";
import { get } from "http";
import { runInThisContext } from "vm";

class Person {
    name: string = '';
    age: number = 0;
    greetings() {
        return this.name + ' ' + this.age
    }
}

const person1: any = new Person();
person1.name = 'Manuela';
person1.age = 24;
// // // console.log(person1.greetings());

/**
 * @definition - classes are object instances, with their properties you can create as many objects as you want
*/

// dte is the "mold" or the template to create new dates
// how to create properties in classes
// - parameters must be initialized
// - can be from the constructor
/* class MyDate {
    year: number
    month: number
    day: number
    constructor(year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }
} */

class Point {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    static distance(a: Point, b: Point): number {
        const dx = a.x - b.x
        const dy = a.y - b.y
        return Math.sqrt(dx * dx + dy * dy)
    }
}
const pointA = new Point(4, 6)
const pointB = new Point(4, 8)

// // console.log(Point.distance(pointA, pointB));

class Investment {
    // public ammount: number // default is public
    // private ammount: number 
    readonly ammount: number // default is public

    constructor(name: string, term: string, ammount: number) {
        this.ammount = ammount
    }
    getAmmount() {
        return this.ammount
    }
}
const investment = new Investment()
investment.ammount = 3000000
// // console.log(investment);
// // console.log(investment.ammount);
// // console.log(investment.getAmmount());


/**
 * reserved words: public, private, readonly
 * @keyword public  inside and ouside modifiable, default public
 * @keyword private  inside modifiable
 * @keyword readonly: inside and ouside not modifiable
 */
class MyDate {

    /**var declaration and initialization **manuially */
    /*     year: number // public year: number inferido to avoid verbose
        private month: number
        readonly day: number
    
        constructor(year: number, month: number, day: number) {
            this.year = year
            this.month = month
            this.day = day
        } */

    /**regafactored better */
    constructor(
        public year: number = 2023,
        private _month: number = 12, // private to test getter
        public day: number = 11
    ) {
        /* if (this._month < 1) {
            throw new Error('only integer')
        } */

    }
    // not need to expose
    // addPadding(value: number) {  // or public
    private addPadding(value: number) {
        return value < 10 ? `0${value}` : `${value}`
    }

    printFormat(): string {
        const day = this.addPadding(this.day)
        const month = this.addPadding(this._month)
        // return `${day}.${month}.${year}` // error
        return `${day}.${month}.${this.year}`
    }

    add(item: number, type: 'years' | 'months' | 'days') {
        if (type === 'years') {
            this.year += item
        } else if (type === 'months') {
            this._month += item
        } else if (type === 'days') {
            this.day += item
        }
    }

    getDay() { }

    /**
     * @description - get month  is a getter
     * month is private in the constructor
     */
    // getMonth() {}
    get month() {
        return this._month
    }

    set month(value: number) {
        // EDGE CASES
        if (value && value > 0 && value <= 12) {
            this._month = value
        } else {
            throw new Error('month not valid')
        }
    }

    /**
     * @description - this is a property or attribute or method
     */
    // isLeapYear(): boolean {
    get isLeapYear(): boolean {
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }
}


// const date = new MyDate(1995, 1, 31)
// // console.log(date.printFormat())
// date.add(0, 'years')
// // console.log(date.printFormat())


// // console.log(date.printFormat())
// // console.log('is leap year: ' + date.isLeapYear);

// date.add(1, 'years')
// // console.log(date.printFormat())
// // date.isLeapYear()
// // console.log('is leap year: ' + date.isLeapYear);

// date.year = 2004

// // from outside class scope I modify a public statement

// // console.log(date.printFormat())
// // console.log('is leap year: ' + date.isLeapYear);

// date.month = 3
// // console.log(`date set in ${date.month}`);

// date.month = 0
// // console.log(`date set in ${date.month}`);

/**
 * inheritance
 */
class Birthday extends MyDate { }

// class Animal {
abstract class Animal {

    // constructor(public name: string) { }

    // constructor(private name: string) { } // private without inheritance

    constructor(public name: string) { } // internal use, not modifiable from outside

    // move() { console.log('moving along!') }

    greeting() { return `hello, I'm ${this.name} ` }

    protected evolve() {
        // // console.log('evolving!!')
        this.name += ' evolving'
    }

}

const juan = new Animal('Juan') // ERROR if Animal is an abstract class
// juan.move()
// console.log(juan.greeting());

class Dog extends Animal {

    // extends properties
    // constructor(public owner: string) {} // just like that throws an error
    constructor(
        // new property
        public owner: string,
        // inherit property defined with diferent value
        name: string
    ) {
        // only call parent properties from child constructor
        super(name)
        // error in name duplicate with static code Analisys
        // super.name
        // this.name
        // // console.log('animal name: ' + super.name);
        // // console.log('animal name: ' + this.name);
    }

    // extends methods
    bark(times: number) {
        const woofs: string[] = Array.from({ length: times }, (k: string) => k = 'woof')

        // woofs.forEach((e) => console.log(e))
        this.evolve() // accesible from this subclass if parent method is protected
    }
    move() {
        // console.log('\ni am a dog and: ');

        // super.move()
    }
}

const tono = new Animal('Tono')

// console.log(tono);

const yuta = new Dog('Alberto', 'Yuta')

yuta.name // accesible from outside classes if parent class is public
// console.log(yuta.name);
yuta.bark(1)
// console.log(yuta.name)

// yuta.name = 'martina' // err for private and protected

yuta.move()

/**
 * statics
 */
// console.log(Math.PI); // calling directly a math static method
// console.log(Math.max(1, 2, 3, 4, 5, 7, 3)); // calling directly a math static method

class MyMath {
    constructor() { }
    PI = 3.14
}
// console.log(MyMath.PI); // ERROR

const myMathInstance = new MyMath() // current solution
// console.log(myMathInstance.PI);

class MyStaticMath {
    constructor() { }
    static PI = 3.14
}
// console.log(MyStaticMath.PI);
MyStaticMath.PI = 2
// console.log(MyStaticMath.PI); // ERROR it should not be modifiable

class MyStaticAndReadonlyMath {
    constructor() { }
    static readonly PI = 3.14
    static max(...numbers: number[]): number {
        return numbers.reduce((max, current) => {
            return max >= current ? max : current
        })
    }
}
// console.log(MyStaticAndReadonlyMath.PI);
// MyStaticAndReadonlyMath.PI = 2 // ERROR
// console.log(MyStaticAndReadonlyMath.PI);
// console.log(MyStaticAndReadonlyMath.max(-1, -3, -5));

// this is a CONTRACT
interface IDriver {
    database: string
    password: string
    port: number

    // and methods
    connect(): void
    isconnected(name: string): void
    disconnect(): void
}

class PostgresDriver implements IDriver {
    constructor(
        public database: string,
        public password: string,
        // public port: string // error types not compatible
        public port: number // error types not compatible
    ) { }

    connect(): void {
        // code
    }
    isconnected(name: string): void {
        // code   
    }
    disconnect(): void {

    }
}

class OracleDriver implements IDriver { // ERROR missing properties
    constructor(
        public database: string,
        public password: string,
        public port: number
    ) { }
}

/** 
 * abstract classes
 */
// passed

/**
 * private constructor - singleton
 */
class MyService {
    // set null first to create once
    static instance: MyService | null = null

    private constructor(private name: string) { }

    getName() { return this.name }

    // this is for call the class without an instance
    static create(name: string) {
        if (MyService.instance === null) {
            MyService.instance = new MyService(name)
        }
        return MyService.instance
    }
}

// const myService = new MyService() // ERROR dont use it like new
const service1 = MyService.create('service 1')
const service2 = MyService.create('service 2')

// they are the same
// console.log(service1 === service2); // should return TRUE

// will alsays be first instance name
// console.log(service1);
// console.log(service2);


/**
 * not rivate constructor - not singleton
 */
class MyUnsingletonService {
    constructor(private name: string) { }

    getName() { return this.name }
}

const unsingletonService1 = new MyUnsingletonService('service 1')
const unsingletonService2 = new MyUnsingletonService('service 2')

// they are the same
// conksole.log(unsingletonService1 === unsingletonService2); // should return FALSE

// will alsays be first instance name
// console.log(unsingletonService1);
// console.log(unsingletonService2);


/** 
 * Promises
 * asyncronism in Ts
 * top level await
*/
function delay(time: number) {

    // the corresponding type of a promise
    const promise = new Promise<boolean>((resolve) => {
        setTimeout(() => {
            resolve(true)
            // resolve('string type') // ERROR not promiselike Boolean
        }, time * 1000)
    })
    return promise
}

// const promise = await delay(5)
// console.log(promise);
import axios from 'axios'


/* from quicktype.io */

// this should go in product.model.ts file
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}

// this should go in category.model.ts file
export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}

async function getProducts(): Promise<Product[]> {
    // const products = await axios.get('https://api.escuelajs.co/api/v1/products?limit=1&offset=0') // return AxiosResponse<any, any>
    // const { data } = await axios.get('https://api.escuelajs.co/api/v1/products?limit=1&offset=0') // data is type of any (get of what??)
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products?limit=1&offset=0')

    // or forced type
    // const data = products.data as Product[] // this is casting to force

    // convert to async inside to catch directly the axios data (one responsability)
    return data
}

const products = await getProducts()
console.log(products.map((item) => {
    // item.  // autocomplete with product properties
    item;
}));

// in memory dont use async

// in memory use asyn, check app folder

/* function getValue(value: number) {
    return value
} */
/* function getValue(value: number | string) {
    return value
} */

//generics
// function getValue<MyCustomType, MyCustomType2>(value: MyCustomType) {
function getValue<MyCustomType>(value: MyCustomType) {
    return value
}

// type infered
getValue(12).toFixed()
getValue('12').toLowerCase()
getValue([]).length

// type indicated
getValue<number>(12).toFixed()
getValue<string>('12').toLowerCase()
getValue<number[]>([]).length
