export const LOTTO_RANK = Object.freeze({
  theFirst : 1,
  theSecond : 2,
  theThird : 3,
  theFourth : 4,
  theFifth : 5,
})

export const LOTTO_STASTICS = Object.freeze({
  firstPrize : 2000000000,
  secondPrize : 30000000,
  thirdPrize : 1500000,
  fourthPrize : 50000,
  fifthPrize : 5000,
})

export const LOTTO_RULE = Object.freeze({
  minNumber : 1,
  maxNumber : 45,
  selectTime : 6,
  buyUnit : 1000,
  buyMax : 100000,
})

export const REGEX = Object.freeze({
  numberSplit : /\B(?=(\d{3})+(?!\d))/g,
})
