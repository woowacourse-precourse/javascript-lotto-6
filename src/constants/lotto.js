export const LOTTO_PRICE = 1_000
export const MIN_LOTTO_NUMBER = 1
export const MAX_LOTTO_NUMBER = 45
export const LOTTO_LENGTH = 6

const FIRST = Object.freeze({
  rankType: 'FIRST',
  match: 6,
  winning_price: 2_000_000_000,
})

const SECOND = Object.freeze({
  rankType: 'SECOND',
  match: 5,
  isBonus: true,
  winning_price: 30_000_000,
})

const THIRD = Object.freeze({
  rankType: 'THIRD',
  match: 5,
  winning_price: 1_500_000,
})

const FOURTH = Object.freeze({
  rankType: 'FOURTH',
  match: 4,
  winning_price: 50_000,
})

const FIFTH = Object.freeze({
  rankType: 'FIFTH',
  match: 3,
  winning_price: 5_000,
})

export const RANKS = Object.freeze([FIFTH, FOURTH, THIRD, SECOND, FIRST])
