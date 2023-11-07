const length = 6;

const price = 1000;

const range = Object.freeze({
  startInclusive: 1,
  endInclusive: 45,
});

const rank = Object.freeze({
  firstPlace: "matchSix",
  secondPlace: "matchFiveAndBonus",
  thirdPlace: "matchFive",
  fourthPlace: "matchFour",
  fifthPlace: "matchThree",
  blank: "matchTwoOrLess",
});

const prizeMoney = Object.freeze({
  [rank.firstPlace]: 2_000_000_000,
  [rank.secondPlace]: 30_000_000,
  [rank.thirdPlace]: 1_500_000,
  [rank.fourthPlace]: 50_000,
  [rank.fifthPlace]: 5_000,
  [rank.blank]: 0,
});

const LOTTO = Object.freeze({
  length,
  price,
  range,
  rank,
  prizeMoney,
});

export default LOTTO;
