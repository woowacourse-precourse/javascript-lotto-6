function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const property = object[name];

    if (
      property &&
      typeof property === "object" &&
      !Object.isFrozen(property)
    ) {
      deepFreeze(property);
    }
  });

  return Object.freeze(object);
}

const LOTTO_SETTINGS = deepFreeze({
  NUMBER_RANGE: { MIN: 1, MAX: 45 },
  NUMBERS_PER_TICKET: 6,
  TICKET_PRICE: 1000,
  PRIZE_TIERS: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
  },
});

export default LOTTO_SETTINGS;
