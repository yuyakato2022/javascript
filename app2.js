// varによる再宣言
var nickname1 = "taro"
console.log(nickname1)
var nickname1 = "ichiro"
console.log(nickname1)
// letによる再宣言
let nicknamee2 = "taro"
console.log(nickname2)
// let nicknamee2 = "ichiro" 再宣言できない
console.log(nicknamee2)
// constによる再宣言
const nickname3 = "taro"
console.log(nickname3)
// const nickname3 = "ichiro" 再宣言できない
console.log(nickname3)

// letによる再代入
let nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)
// constによる再代入できない
// const nickname5 = "taro"
// console.log(nickname5)
// nickname5 = "jiro"
// console.log(nickname5)
