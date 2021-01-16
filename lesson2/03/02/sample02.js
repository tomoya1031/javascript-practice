let myThings2 = {
  food: "寿司"
}
console.log(myThings2.food)
myThings2.food = "ピザ"
console.log(myThings2.food)

myThings2.tea = "グリーンティー"
console.log(myThings2)

console.log(Object.keys(myThings2))

Object.keys(myThings2).forEach(function (key){
	console.log(key)
})

Object.keys(myThings2).forEach(function (key){
	console.log(key,"プロパティは",myThings2[key],"です")
})