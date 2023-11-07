import Validate from '../utils/Validate.js';

class Bonus {
  #bonus;

  constructor(bonus, numbers) {
    this.#bonus = bonus;
    this.#validate(bonus, numbers);
  }

  #validate(bonus, numbers) {
    Validate.isItNumber(bonus);
    Validate.isItInRangeOfNumber(bonus);
    Validate.cannotBeDuplicatedWithList(bonus, numbers);
  }

  computeMatchWithBonus(lottos) {
    if (lottos.includes(Number(this.#bonus))) {
      return true;
    }
  }
}

export default Bonus;
