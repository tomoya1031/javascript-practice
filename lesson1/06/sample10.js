const myFruits7 = ["りんご","みかん","すいか"]
const myFruits8 = ["めろん","ばなな","みかん","もも"]
const newFruits6 = myFruits7.concat(myFruits8)
console.log(newFruits6)

const index = newFruits6.indexOf("みかん")
console.log(index)

const index1 = newFruits6.lastIndexOf("みかん")
console.log(index1)

const isExist = newFruits6.some(function(fruit){
	return fruit === "みかん"
})
console.log(isExist)

const isExist1 = newFruits6.some(function(fruit){
	return fruit === "いちご"
})
console.log(isExist1)

const isExistAll = newFruits6.every(function(fruit){
	return fruit.length === 3
})
console.log(isExistAll)

const isExistAll1 = newFruits6.every(function(fruit){
	return fruit.length === 4
})
console.log(isExistAll1)

const threeLengthFruit = newFruits6.find(function(fruit){
	return fruit.length === 3
})
console.log(threeLengthFruit)

const threeLengthFruit1 = newFruits6.find(function(fruit){
	return fruit.length !== 3
})
console.log(threeLengthFruit1)