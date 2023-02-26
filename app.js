const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

const fromEuroToDollar = (Euro) => {
    let Dollar=Euro*1.2
    return Dollar
}

const fromDollarToYen = (Dollar) => {
    let Euro=Dollar/1.2
    let Yen=Euro*127.9
    return Yen
}


const fromYenToPound = (Yen) => {
    let Euro=Yen/127.9
    let Pound=Euro*0.8
    return Pound
}
module.exports={sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}