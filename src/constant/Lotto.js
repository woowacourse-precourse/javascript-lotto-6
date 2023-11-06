const LOTTO_NUMBER = {
  minLottoNum: 1,
  maxLottoNum: 45,
};

const LOTTO_COUNT = {
  count: 6,
  bonusCount: 1,
  prizeCount: 5,
};

const MATCH = {
  minMatchCount: 3,
};

const PRICE = {
  price: 1000,
};

const DELIMITER = {
  delimiter: ',',
};

const LOTTO = Object.freeze({
  ...LOTTO_NUMBER,
  ...LOTTO_COUNT,
  ...MATCH,
  ...PRICE,
  ...DELIMITER,
});

export default LOTTO;
