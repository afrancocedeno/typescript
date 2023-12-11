import { publicDecrypt } from "crypto";
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

class Animal {

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

const juan = new Animal('Juan')
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
            return max >= current? max: current
        })
    }
}
// console.log(MyStaticAndReadonlyMath.PI);
// MyStaticAndReadonlyMath.PI = 2 // ERROR
// console.log(MyStaticAndReadonlyMath.PI);
console.log(MyStaticAndReadonlyMath.max(-1, -3, -5));
