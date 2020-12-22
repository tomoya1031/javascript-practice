const myFruits5 = ["りんご","みかん","すいか","めろん","ばなな","もも"]
const newFruits = myFruits5.slice(3)
console.log(newFruits)

const newFruits1 = myFruits5.slice(-2)
console.log(newFruits1)

const newFruits2 = myFruits5.slice(2,4)
console.log(newFruits2)

const newFruits3 = myFruits5.filter(function(fruit){
	return fruit !== "めろん"
})
console.log(newFruits3)

const newFruits4 = myFruits5.filter(function(fruit){
	return fruit.search("ん") !== -1
})
console.log(newFruits4)