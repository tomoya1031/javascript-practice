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

let myThings1 = {
  food: "寿司"
}

console.log(myThings1.food)      //←寿司と表示されます

myThings1.food = "ピザ"          //←"寿司" から "ピザ" へ文字列を上書き変更する

console.log(myThings1.food)      //←ピザと表示されます