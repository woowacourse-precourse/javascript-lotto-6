import { Rank } from '../types.js'

export const LOTTO_PRICE = 1_000
export const MIN_LOTTO_NUMBER = 1
export const MAX_LOTTO_NUMBER = 45
export const LOTTO_LENGTH = 6

/** @type {Rank} */
export const FIRST = Object.freeze({
  index: 4,
  matchCount: 6,
  isBonusMatch: false,
  winning_price: 2_000_000_000,
})

/** @type {Rank} */
export const SECOND = Object.freeze({
  index: 3,
  matchCount: 5,
  isBonusMatch: true,
  winning_price: 30_000_000,
})

/** @type {Rank} */
export const THIRD = Object.freeze({
  index: 2,
  matchCount: 5,
  isBonusMatch: false,
  winning_price: 1_500_000,
})

/** @type {Rank} */
export const FOURTH = Object.freeze({
  index: 1,
  matchCount: 4,
  isBonusMatch: false,
  winning_price: 50_000,
})

/** @type {Rank} */
export const FIFTH = Object.freeze({
  index: 0,
  matchCount: 3,
  isBonusMatch: false,
  winning_price: 5_000,
})

/** @type {Rank[]} */
export const RANKS = Object.freeze([FIFTH, FOURTH, THIRD, SECOND, FIRST])
