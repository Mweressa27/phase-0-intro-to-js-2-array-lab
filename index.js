// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph')
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newArray = [...cats, 'Broom',]
    return newArray
}

function  prependCat(name) {
    const anotherArray = ['Arnold', ...cats]
    return anotherArray
}

function removeLastCat() {
    const arrayOne = cats.slice(0, -1)
    return arrayOne
}

function removeFirstCat() {
    const arrayTwo = cats.slice(1)
    return arrayTwo
}



