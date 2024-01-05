const letter = ['l', 'e', 't', 't']

/* for each */
letter.forEach(element => { console.log(element) });



let animals = ['mico', 'perro', 'lobo', 'gato']

// console.log(animals);
const index = animals.findIndex((element) => element === 'gato')

animals[3] = 'cerdo'

// console.log(animals);

// maps create a new array
// animals.map((item) => {item = item === 'cerdo'? 'gato': item})

// const newAnimals = animals.map((item, index) => {
animals = animals.map((item, index) => {
    if (item === 'cerdo') {
        item = 'jirafa'
        return item
    }
    return item
})

// console.log(animals);
// console.log(newAnimals);
let numbers = [1, 2, 3, 4, 5]

// maps create a new array
// animals.map((item) => {item = item === 'cerdo'? 'gato': item})

// const newAnimals = animals.map((item, index) => {
function multiply(params: number[]) {
    return params.map((item, index) => item * 2)

}
// console.log(multiply(numbers));
// console.log(newAnimals);


const investments = [
    {
        name: 'oro',
        ammount: 2500000,
        active: true
    },
    {
        name: 'plata',
        ammount: 2500000,
        active: true
    },
    {
        name: 'petroleo',
        ammount: 2500000,
        active: false
    },
    {
        name: 'emergentes',
        ammount: 2500000,
        active: true
    },
]

const ammountArray = investments.map((item) => item.ammount)
// console.log(ammountArray);

// add attribute
const newMap1 = investments.map((item) => {
    item.interest = 0.12
    return item
})
// console.log(newMap1);

// original array changed, reference in memory modified before copy
// console.log(investments)

const newMap2 = investments.map((item) => {
    return {
        ...item,
        period: 12        
    }
})
// console.log(newMap1);
// console.log(newMap2);

// not modified original array
// console.log(investments);

// returns an array by given criteria
const activeInvestments = investments.filter((item) => item.active === true)
console.log(investments);
console.log(activeInvestments);
console.log(investments);
