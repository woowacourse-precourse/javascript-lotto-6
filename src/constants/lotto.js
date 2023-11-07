const length = 6;

const price = 1000;

const range = Object.freeze({
  startInclusive: 1,
  endInclusive: 45,
});

const orderedRank = Object.freeze([
  "fifthPlace",
  "fourthPlace",
  "thirdPlace",
  "secondPlace",
  "firstPlace",
]);

const rankKey = Object.freeze({
  firstPlace: "6개 일치",
  secondPlace: "5개 일치, 보너스 볼 일치",
  thirdPlace: "5개 일치",
  fourthPlace: "4개 일치",
  fifthPlace: "3개 일치",
  blank: "2개 이하 일치",
});

const prizeMoney = Object.freeze({
  [rankKey.firstPlace]: 2_000_000_000,
  [rankKey.secondPlace]: 30_000_000,
  [rankKey.thirdPlace]: 1_500_000,
  [rankKey.fourthPlace]: 50_000,
  [rankKey.fifthPlace]: 5_000,
  [rankKey.blank]: 0,
});

const LOTTO = Object.freeze({
  length,
  price,
  range,
  orderedRank,
  rankKey,
  prizeMoney,
});

export default LOTTO;
