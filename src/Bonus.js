import InputValidator from './utils/InputValidator';

export default class Bonus {
  #bonus;

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
