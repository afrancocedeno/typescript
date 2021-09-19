const inputNumber: number = +process.argv[2]

const toFibonacci = (num: number): number[] => {
    return new Array(num).fill(1).reduce((array: number[], _, i: number) => {
        array.push((i <= 1) ? i : array[i - 2] + array[i - 1])
        return array
    }, []);
}

// input 6 -> 8
/* const toFibonacci = (num: number): number[] => {
    let fibArray: number[] = [];
    for (let i = 0; i <= num; i++) {
        fibArray.push((i < 2) ? i : fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
} */

console.log(toFibonacci(inputNumber));
