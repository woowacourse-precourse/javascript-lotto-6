import Bonus from './Bonus.js';
import Numbers from './Numbers.js';
import { BonusIncludedError } from '../error/CustomErrors.js';

export default class Raffle {
  #numbers;
  #bonus;

  constructor(numbers) {
    this.#numbers = new Numbers(numbers);
  }

  addBonus(bonus) {
    if (this.#numbers.get().includes(Number(bonus))) {
      throw new BonusIncludedError(bonus);
    }
    this.#bonus = new Bonus(bonus);
  }

  numbers() {
    return this.#numbers.get();
  }

  bonus() {
    return this.#bonus.get()
  }
}