import { Console } from '@woowacourse/mission-utils';
import BonusValidation from './Validations/BonusValidation.js';
import inputs from './View/inputs.js';

class Bonus {
  #bonus;

  constructor() {
    this.#bonus = 0;
  }

  async #validate(lotto) {
    try {
      const bonusAnswer = await inputs.enterBonus();
      const validation = new BonusValidation(bonusAnswer);

      validation.finishValidation(lotto);

      return bonusAnswer;
    } catch (error) {
      Console.print(error.message);
      return this.#validate(lotto);
    }
  }

  #setBonus(answer) {
    this.#bonus = Number(answer);
  }

  async controlBonus(lotto) {
    const answer = await this.#validate(lotto);

    this.#setBonus(answer);
  }

  getBonus() {
    return this.#bonus;
  }
}

export default Bonus;
