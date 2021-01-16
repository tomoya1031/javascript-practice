let myThings3 = {}

Object.defineProperties(myThings3, {
	sports: {
		enumerable: true,
		writable: true,
		value: "サッカー"
	},
	food: {
		enumerable: false,
		writable: false,
		value: "カレーライス"
	}
})

//enumerable
console.log(Object.keys(myThings3))

//writable
myThings3.sports = "ラグビー"
console.log(myThings3.sports)

myThings3.food = "寿司"
console.log(myThings3.food)