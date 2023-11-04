const LOTTO_NUMBER = {
  minLottoNum: 1,
  maxLottoNum: 45,
};

const LOTTO_COUNT = {
  count: 6,
  bonusCount: 1,
  winnerCount: 5,
};

const PRICE = {
  price: 1000,
};

const LOTTO = Object.freeze({
  ...LOTTO_NUMBER,
  ...LOTTO_COUNT,
  ...PRICE,
});

export default LOTTO;
