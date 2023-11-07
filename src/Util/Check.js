import Constants from "./Constants.js";

export default class Check {
  #conditions = {
    LOTTO_PRICE: 1000,
    LOTTO_MAX_NUM: 45,
    LOTTO_MIN_NUM: 1,
    BASE_NUM_UNITS: 6,
    BONUS_NUM_UNIT: 1,
  };

  money(amount) {
    if (amount % this.#conditions.LOTTO_PRICE || Number.isNaN(amount))
      throw new Error(Constants.error.money);
    return amount;
  }

  base(baseArray) {
    const set = new Set();
    baseArray.forEach((number) => {
      this.isInRange(number);
      set.add(number);
    });
    Check.hasNaN(baseArray);
    this.isValidSet(set);
  }

  bonus(baseArray, number) {
    this.isInRange(number);
    Check.isDuplicate(baseArray, number);
    if (Number.isNaN(number)) Check.hasNaN([number]);
  }

  isValidSet(set) {
    if (set.size !== this.#conditions.BASE_NUM_UNITS)
      throw new Error(Constants.error.sixUnits);
  }

  isValidNumber(array) {
    if (array.length !== this.#conditions.BONUS_NUM_UNIT)
      throw new Error(Constants.error.singleUnit);
  }

  isInRange(number) {
    if (
      number < this.#conditions.LOTTO_MIN_NUM ||
      number > this.#conditions.LOTTO_MAX_NUM
    )
      throw new Error(Constants.error.outOfRange);
  }

  static isDuplicate(array, number) {
    if (array.includes(number)) throw new Error(Constants.error.duplicate);
  }

  static hasNaN(array) {
    if (array.includes(NaN)) throw new Error(Constants.error.nan);
  }
}
