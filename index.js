// Write your solution here!
let cats = ["Milo" , "Otis" , "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push(name);
    return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.unshift(name)
    return copyOfCats;
}

function removeLastCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats;
}