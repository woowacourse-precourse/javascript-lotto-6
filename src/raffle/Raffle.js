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

  getNumbers() {
    return this.#numbers.get();
  }

  getBonus() {
    return this.#bonus.get()
  }
}