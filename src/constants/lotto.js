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
});

const LOTTO = Object.freeze({
  length,
  price,
  range,
  rank,
});

export default LOTTO;
