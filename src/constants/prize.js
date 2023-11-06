const matchSix = Object.freeze({
  status: 6,
  match: 6,
  prize: 2_000_000_000,
  message: '6개 일치 (2,000,000,000원) - ',
});

const matchFiveAndBonus = Object.freeze({
  status: 'matchFiveAndBonus',
  match: 5,
  prize: 30_000_000,
  message: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
});

const matchFive = Object.freeze({
  status: 5,
  match: 5,
  prize: 1_500_000,
  message: '5개 일치 (1,500,000원) - ',
});

const matchFour = Object.freeze({
  status: 4,
  match: 4,
  prize: 50_000,
  message: '4개 일치 (50,000원) - ',
});

const marchThree = Object.freeze({
  status: 3,
  match: 3,
  prize: 5_000,
  message: '3개 일치 (5,000원) - ',
});

const PRIZE = Object.freeze({
  6: matchSix,
  matchFiveAndBonus,
  5: matchFive,
  4: matchFour,
  3: marchThree,
});

export default PRIZE;
