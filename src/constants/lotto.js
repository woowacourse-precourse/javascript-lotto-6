const lotto = Object.freeze({
  price: 1000,
  min: 1,
  max: 45,
  number: 6,
})

const prize = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
})

const SET_LOTTO = Object.freeze({
  lotto, prize
})

export default SET_LOTTO