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
console.log(person1.greetings());

/**
 * @definition - classes are object instances, with their properties you can create as many objects as you want
*/

// dte is the "mold" or the template to create new dates
// how to create properties in classes
// - parameters must be initialized
// - can be from the constructor
class MyDate {
    year: number
    month: number
    day: number
    constructor(year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }
}



