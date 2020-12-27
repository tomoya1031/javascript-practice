const someDay = new Date(2020, 1, 13)
const dayNames1 = ["日", "月", "火", "水", "木", "金", "土"]
const youbi = dayNames1[someDay.getDay()]
console.log(
  someDay.getFullYear() + "年" +
  (someDay.getMonth() + 1) + "月" +
  someDay.getDate() + "日は" +
  youbi + "曜日です。"
)