function getAdditionNumber(number1,number2){
  const answer = number1 + number2
  //const answer1 = number1 + number2          ←この書き方ではダメ
  return answer
}

const answer1 = getAdditionNumber(1 ,20)
console.log(answer1)

const answer2 = getAdditionNumber(12 , 3)
console.log(answer2)

const answer3 = getAdditionNumber(14 , 11)
console.log(answer3)