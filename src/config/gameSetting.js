export const LOTTO_SETTINGS = deepFreeze({
  NUMBER_RANGE: { MIN: 1, MAX: 45 },
  NUMBERS_PER_TICKET: 6,
  TICKET_PRICE: 1000,
  PRIZE_RANKS: {
    FIFTH_PRIZE: "FIFTH_PRIZE",
    FOURTH_PRIZE: "FOURTH_PRIZE",
    THIRD_PRIZE: "THIRD_PRIZE",
    SECOND_PRIZE: "SECOND_PRIZE",
    FIRST_PRIZE: "FIRST_PRIZE",
  },
  WINNINGS: {
    FIFTH_PRIZE: { prize: 5000, matchNum: 3 },
    FOURTH_PRIZE: { prize: 50000, matchNum: 4 },
    THIRD_PRIZE: { prize: 1500000, matchNum: 5 },
    SECOND_PRIZE: { prize: 30000000, matchNum: 5 },
    FIRST_PRIZE: { prize: 2000000000, matchNum: 6 },
  },
});

export class LottoSettings {
  settings;
  constructor(settings = LOTTO_SETTINGS) {
    this.settings = settings;
  }

  getPrizeForRank(rank) {
    return this.settings.WINNINGS[rank]?.prize;
  }

  getMatchNumberForRank(rank) {
    return this.settings.WINNINGS[rank]?.matchNum;
  }

  getSecondPrizeRank() {
    return this.settings.PRIZE_RANKS.SECOND_PRIZE;
  }

  getAllPrizeDetails() {
    return this.settings.WINNINGS;
  }

  getLottoNumberRange() {
    const minOfLottoNumberRange = this.settings.NUMBER_RANGE.MIN;
    const maxOfLottoNumberRange = this.settings.NUMBER_RANGE.MAX;
    return { minOfLottoNumberRange, maxOfLottoNumberRange };
  }

  getNumberPerLotto() {
    return this.settings.NUMBERS_PER_TICKET;
  }

  getLottoPrice() {
    return this.settings.TICKET_PRICE;
  }
}

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
