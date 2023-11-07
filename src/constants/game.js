function deepFreeze(object) {
  var propNames = Object.getOwnPropertyNames(object);

  for (let name of propNames) {
    let value = object[name];

    object[name] =
      value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

export const LOTTO_CONSTANT = deepFreeze({
  SIZE: 6,
  RANGE: {
    MAX: 45,
    MIN: 1,
  },
});

export const MONEY_CONSTANT = deepFreeze({
  LOTTO_PRICE: 1000,
  REWARD: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
  },
});
