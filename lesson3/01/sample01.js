let myObject = {}

console.log(myObject)

let myThings = {
  sports: "サッカー",
  hobby: "テーブルトークRPG",
  eat: "カレーライス"
}

console.log(myThings)

// ドット表記
console.log(myThings.food) // カレーライスと表示します

// ブラケット表記
console.log(myThings["food"]) // カレーライスと表示します

let div = document.querySelector("#root")

div.innerHTML = "好きなスポーツ：" + myThings.sports + "<br />" +
                "好きな遊び：" + myThings.hobby + "<br />" +
                "好きな食べ物：" + myThings.food

let foods = {
  japanese_food: "寿司",
  italian_food: "ピザ"
}

let suffix = "_food"

console.log(foods["japanese" + suffix]) // 寿司と表示します
console.log(foods["italian" + suffix])  // ピザと表示します

console.log(foods.mexican_food) // undefinedを表示します