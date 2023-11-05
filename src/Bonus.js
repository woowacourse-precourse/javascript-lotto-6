import InputValidator from './utils/InputValidator.js';

export default class Bonus {
  #bonus;

  static generateBonus(number, winningLotto) {
    return new Bonus(number, winningLotto);
  }

  constructor(number, winningLotto) {
    this.#bonus = this.#validate(number, winningLotto);
  }

  #validate(number, winningLotto) {
    return InputValidator.validateBonus(number, winningLotto);
  }

  getBonus() {
    return this.#bonus;
  }
}
