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
  WINNINGS: {
    FIRST_PRIZE: { prize: 2000000000, matchNum: 6 },
    SECOND_PRIZE: { prize: 30000000, matchNum: 5 },
    THIRD_PRIZE: { prize: 1500000, matchNum: 5 },
    FOURTH_PRIZE: { prize: 50000, matchNum: 4 },
    FIFTH_PRIZE: { prize: 5000, matchNum: 3 },
  },
});

export default LOTTO_SETTINGS;
