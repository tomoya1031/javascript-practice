let timeoutId = setTimeout(function () {
  console.log("5秒経過しました")
}, 5000)

clearTimeout(timeoutId)