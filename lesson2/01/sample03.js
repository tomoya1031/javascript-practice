let today = new Date()

console.log("今日は" + today.getDate() + "日です")

let futureDay = new Date()
futureDay.setTime(today.getTime())
futureDay.setDate(today.getDate() + 100)

console.log(
  "100日後の日付は" +
  futureDay.getFullYear() + "年" +
  (futureDay.getMonth() + 1) + "月" +
  futureDay.getDate() + "日です。"
)