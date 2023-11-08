const NUMBER = {
  price: 1000,
  defaultLength: 6,
  minNumber: 1,
  maxNumber: 45,
  zero: 0,
}

const RANK_RULL_NUMBER = {
  defaultLength: 5,
}

const RANK_NUMBER = {
  plus: 1,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
}

const RANK_WINNING_NUMBER = {
  one: 4,
  two: 3,
  three: 2,
  four: 1,
  five: 0,
}

const PRIZEMONEY_NUMBER = {
  prizeMoneys: [5000, 50000, 1500000, 30000000, 2000000000],
  percent: 100,
  roundPosition: 1,
};

const DELIMITER = {
  issuedLotto: ', ',
  winningNumbers: ',',
}

const REGEXP = {
  isNotNumber: /[^0-9]/,

}

export {
  NUMBER,
  RANK_RULL_NUMBER,
  RANK_NUMBER,
  RANK_WINNING_NUMBER,
  DELIMITER,
  PRIZEMONEY_NUMBER,
  REGEXP,
};
