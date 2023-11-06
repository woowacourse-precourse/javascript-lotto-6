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

const MONEY_RANGE = {
  maxMoney: Number.MAX_SAFE_INTEGER - (Number.MAX_SAFE_INTEGER % PRICE.price), // 정수 최대값 이하 1000원 단위
  minMoney: PRICE.price,
};

const DELIMITER = {
  delimiter: ',',
};

const LOTTO = Object.freeze({
  ...LOTTO_NUMBER,
  ...LOTTO_COUNT,
  ...MATCH,
  ...PRICE,
  ...MONEY_RANGE,
  ...DELIMITER,
});

export default LOTTO;
