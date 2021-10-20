/*
nodeGlobals
idnetyfy the node global you want to dig into
*/
const nodeGlobals: any = {
    0: global,
    1: __dirname,
    2: __filename,
    3: process,
}

const key: number = +process.argv[2]

console.log(nodeGlobals[key]);
