let myObject = {}
console.log(myObject)

let myThings = {
  sports: "サッカー",
  hobby: "テーブルトークRPG",
  eat: "カレーライス"
}
console.log(myThings)

console.log(myThings.eat)
console.log(myThings["eat"])

let foods = {
  japanese_food: "寿司",
  italian_food: "ピザ"
}
let suffix = "_food"
console.log(foods["japanese" + suffix])
console.log(foods["italian" + suffix])

console.log(foods.mexican_food)