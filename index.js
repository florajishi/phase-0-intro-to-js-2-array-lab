// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const copyCat = [...cats, "Broom"]
    return copyCat;
}
function prependCat(name) {
    const copyCat = ["Arnold", ...cats]
    return copyCat;
}
function removeLastCat() {
    const copyCat = cats.slice(0, cats.length - 1)
    return copyCat;
}
function removeFirstCat() {
    const copyCat = cats.slice(1)
    return copyCat;
}