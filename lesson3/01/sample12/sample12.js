let myThings = {
  sports: "サッカー",
  hobby: "テーブルトークRPG",
  eat: "カレーライス"
}

Object.keys(myThings).forEach(function (key) {
  console.log(key, "プロパティは", myThings[key], "です")
})
