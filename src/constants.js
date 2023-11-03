const MIN = 1;
const MAX = 45;
const LOTTO_LENGTH = 6;
const UNIT = 1000;
const MATCH = {
  rank1: { message: '6개 일치 (2,000,000,000원)', money: 2000000000 },
  rank2: {
    message: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    money: 30000000,
  },
  rank3: { message: '5개 일치 (1,500,000원)', money: 1500000 },
  rank4: { message: '4개 일치 (50,000원)', money: 50000 },
  rank5: { message: '3개 일치 (5,000원)', money: 5000 },
};
export { MIN, MAX, UNIT, LOTTO_LENGTH, MATCH };
