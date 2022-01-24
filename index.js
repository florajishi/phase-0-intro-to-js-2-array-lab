const cats = [`Milo` , `Otis` , `Garfield`]

function destructivelyAppendCat() {
  cats.push("Ralph")
  return cats
}
console.log((destructivelyAppendCat)(cats))

function destructivelyPrependCat() {
  cats.unshift("Bob")
  return cats
}
console.log((destructivelyPrependCat)(cats))

function destructivelyRemoveLastCat() {
  cats.pop()
  return cats
}
console.log((destructivelyRemoveLastCat)(cats))

function destructivelyRemoveFirstCat(){
  cats.shift()
  return cats
}
console.log((destructivelyRemoveFirstCat)(cats))

function appendCat(){
  const newCats = [...cats , "Broom"]
  return newCats
}
console.log((appendCat)(cats))

function prependCat(){
  const newCats = ["Arnold" , ...cats]
  return newCats
}
console.log((prependCat)(cats))

function removeLastCat(){
  const removeCat = cats.slice(0, 2)
  return removeCat
  //or const removeCat = cats.slice(0, cats.length -1)
  // => ["Milo", "Otis"]
}
console.log((removeLastCat)(cats))

function removeFirstCat() {
  const removeCat = cats.slice(1)
  return removeCat
}
console.log((removeFirstCat)(cats))