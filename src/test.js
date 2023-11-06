function makeRandomTrueFalse() {
  const number = Math.floor(Math.random() * 100)
  console.log(number)
  return number
} 

const array = Array(5).fill(true)
const testArray = [array.map(() => { makeRandomTrueFalse() })]

console.log(testArray)