const purchase = Object.freeze({
  unit: 1000,
});

const lottoNumber = Object.freeze({
  min: 1,
  max: 45,
  count: 6,
});

const LOTTO_INFO = Object.freeze({ purchase, lottoNumber });

export default LOTTO_INFO;
