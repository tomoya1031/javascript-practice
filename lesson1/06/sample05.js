const myFruits2 = ["りんご","みかん","すいか"]
let text = "私の好きな果物は"
for (let i = 0 ; i < myFruits2.length ; i++){
	text += myFruits2[i]
	if(i !== myFruits2.length -1){
		text += "と"
	}
}
text += "です。"
console.log(text)