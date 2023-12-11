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
// // console.log(person1.greetings());

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

// console.log(Point.distance(pointA, pointB));

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
// console.log(investment);
// console.log(investment.ammount);
// console.log(investment.getAmmount());


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


const date = new MyDate(1995, 1, 31)
console.log(date.printFormat())
date.add(0, 'years')
console.log(date.printFormat())


console.log(date.printFormat())
console.log('is leap year: ' + date.isLeapYear);

date.add(1, 'years')
console.log(date.printFormat())
// date.isLeapYear()
console.log('is leap year: ' + date.isLeapYear);

date.year = 2004

// from outside class scope I modify a public statement

console.log(date.printFormat())
console.log('is leap year: ' + date.isLeapYear);

date.month = 3
console.log(`date set in ${date.month}`);

date.month = 0
console.log(`date set in ${date.month}`);

