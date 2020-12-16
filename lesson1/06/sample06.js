const myFruits3 = ["りんご","みかん","すいか"]
let text1 = "私の好きな果物は"
myFruits3.forEach(function(myFruit,i){
	text1 += myFruit
	if(i !== myFruits3.length -1){
		text1 += "と"
	}
})
text1 += "です。"
console.log(text1)