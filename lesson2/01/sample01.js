let myDate = new Date()

console.log(myDate.getFullYear())
console.log(myDate.getMonth() + 1)
console.log(myDate.getDate())
console.log(myDate.getHours())

console.log("1970年1月1日から数えて" + myDate.getTime() + "ミリ秒経過しました")

console.log(
  "今日は" +
  myDate.getFullYear() + "年" +
  (myDate.getMonth() + 1) + "月" +
  myDate.getDate() + "日です。"
)

let dayNames = [ "日", "月", "火", "水", "木", "金", "土" ]
let day = myDate.getDay()
console.log("今日は" + dayNames[day] + "曜日です。")

console.log(
  "時刻は" + myDate.getHours()   + "時" +
            myDate.getMinutes() + "分" +
            myDate.getSeconds() + "秒" +
            myDate.getMilliseconds() + "ミリ秒です。"
)