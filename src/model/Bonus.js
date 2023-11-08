import message from '../utils/message.js';

class Bonus {
  #bonus;

  constructor(bonus, numbers) {
    this.#bonus = bonus;
    this.#validate(bonus, numbers);
  }

  #validate(bonus, numbers) {
    if (/[^0-9]/g.test(bonus)) {
      throw new Error(message.ERROR_ONLY_NUMBER);
    } else if (bonus <= 0 || bonus > 45) {
      throw new Error(message.ERROR_NUMBER_RANGE_1_TO_45);
    } else if (numbers.includes(bonus)) {
      throw new Error(message.ERROR_CAN_NOT_BE_DUPLICATED_WITH_WINNING_NUMBER);
    }
  }

  computeMatchWithBonus(lottos) {
    if (lottos.includes(Number(this.#bonus))) {
      return true;
    }
  }
}

export default Bonus;
