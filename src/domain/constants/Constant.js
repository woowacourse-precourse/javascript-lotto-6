export const CONSTANTS = {
  IS_ERROR: '[ERROR]',
};

export const LottoRate = {
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  bonus: 30000000,
};

export const lottoNumberRange = {
  from: 1,
  to: 45,
  pick: 6,
};

export const lottoVal = {
  lottoLength: 6,
  max: 45,
  min: 0,
  moneyCalc: (money) => Number(money) % 1000 !== 0,
  zeroCheck: (money) => Number(money) === 0,
};

export const utillConst = {
  addStatic: 1,
  buyCalc: (money) => parseInt(money / 1000, 10),
  calcRate: (earnMoney, calcNumber) =>
    Math.round((earnMoney / calcNumber) * 10000) / 100,
};
