const money = Object.freeze({
  unitAmount: 1000,
});

const lotto = Object.freeze({
  minNumber: 1,
  maxNumber: 45,
  length: 6,
});

const bonus = Object.freeze({
  minNumber: 1,
  maxNumber: 45,
});

const firstPrizeCriteria = Object.freeze({ matchCount: 6, bonusMatch: false });
const secondPrizeCriteria = Object.freeze({ matchCount: 5, bonusMatch: true });
const thirdPrizeCriteria = Object.freeze({ matchCount: 5, bonusMatch: false });
const fourthPrizeCriteria = Object.freeze({ matchCount: 4, bonusMatch: false });
const fifthPrizeCriteria = Object.freeze({ matchCount: 3, bonusMatch: false });

const winningCriteria = Object.freeze({
  first: firstPrizeCriteria,
  second: secondPrizeCriteria,
  third: thirdPrizeCriteria,
  fourth: fourthPrizeCriteria,
  fifth: fifthPrizeCriteria,
});

const prizes = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
});

const game = Object.freeze({
  money,
  lotto,
  bonus,
});

const statistics = Object.freeze({
  winningCriteria,
  prizes,
});

const NUMBER = Object.freeze({
  game,
  statistics,
});

export default NUMBER;
