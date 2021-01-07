let myObject = {}

console.log(myObject)

let myThings = {
  sports: "サッカー",
  hobby: "テーブルトークRPG",
  eat: "カレーライス"
}

console.log(myThings)

let myThings1 = {
  sports: "サッカー",
  hobby: "テーブルトークRPG",
  eat: "カレーライス"
}

let myThings2 = {
  sports1: "サッカー",
  hobby2: "テーブルトークRPG",
  food2: "カレーライス"
}

// ドット表記
console.log(myThings2.food2) // カレーライスと表示します

// ブラケット表記
console.log(myThings2["food"]) // カレーライスと表示します

let foods = {
  japanese_food: "寿司",
  italian_food: "ピザ"
}

let suffix = "_food"

console.log(foods["japanese" + suffix]) // 寿司と表示します
console.log(foods["italian" + suffix])  // ピザと表示します