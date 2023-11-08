export const RANGE = {
  smallNumber: 1,
  largestNumber: 45,
};

export const PICK_NUMBERS = 6;

export const LOTTO_PRICE = 1000;

export const WINNING_REQUIRED_COUNT = Object.freeze({
  firstPlace: 6,
  secondPlace: 5,
  thirdPlace: 5,
  fourthPlace: 4,
  fifthPlace: 3,
});

export const WINNING_RANK_COUNT = Object.freeze({
  firstPlace: 1,
  secondPlace: 2,
  thirdPlace: 3,
  fourthPlace: 4,
  fifthPlace: 5,
});

export const WINNING_RANK = Object.freeze({
  [WINNING_REQUIRED_COUNT.firstPlace]: WINNING_RANK_COUNT.firstPlace,
  [WINNING_REQUIRED_COUNT.secondPlace]: WINNING_RANK_COUNT.secondPlace,
  [WINNING_REQUIRED_COUNT.thirdPlace]: WINNING_RANK_COUNT.thirdPlace,
  [WINNING_REQUIRED_COUNT.fourthPlace]: WINNING_RANK_COUNT.fourthPlace,
  [WINNING_REQUIRED_COUNT.fifthPlace]: WINNING_RANK_COUNT.fifthPlace,
});
