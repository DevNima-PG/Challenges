const DotLetters = { "ب": 1, "پ": 3, "ت": 2, "ث": 3, "ج": 1, "چ": 3, "خ": 1, "ذ": 1, "ز": 1, "ش": 3, "ض": 1, "غ": 1, "ف": 1, "ق": 2, "ن": 1, "ی": 0 }

function SumDots(dotsString) {
    return dotsString.reduce((partialSum, a) => partialSum + a, 0);
}

function SumYeha(yeHa) {
    return yeHa.reduce((partialSum, a) => partialSum + a, 0);
}

function CountDots(text) {
    const splitted = text.split("");
    const dotsString = [];
    let sum = 0;
    let finalSum = 0;
    const YeHa = [];
    splitted.map(letter => {
        if (Object.keys(DotLetters).includes(letter)) {
            dotsString.push(DotLetters[letter])
            sum = SumDots(dotsString)
        }
    })
    splitted.forEach((letter, i) => {
        if (letter == "ی" & splitted[i + 1] != " ") {
            YeHa.push(2)
        }
    })
    finalSum = sum + SumYeha(YeHa)
    return finalSum;
}

console.log(CountDots("کشتم شپش شپش کش شش پا را اینم ی دونقطه"))
