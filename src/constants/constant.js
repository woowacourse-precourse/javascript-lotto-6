export const LOTTO_VAL = 1000;
export const REGEX = {
  num:  /^[0-9]+$/,
  everyThreeUnit: /\B(?=(\d{3})+(?!\d))/g,
}

export const LOTTO_RANGE = {
  start: 1,
  end: 45,
  range: 6,
}

export const CONVERTER_VAR = {
  comma: ',',
}

export const RANK = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
}

export const NUMBER_BY_RANK = {
  1: 'first',
  2: 'second',
  3: 'third',
  4: 'fourth',
  5: 'fifth',
}

export const RANK_BY_COUNT = {
  3: 5,
  4: 4,
  6: 1,
}

export const RANK_STANDARD = {
  standardOfRank: 3,
  standardOfBonus: 5,
}

export const RANK_BY_PRIZE = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
}