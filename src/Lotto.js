import { Console } from '@woowacourse/mission-utils';
import lottoModel from './models/lottoModel.js';
import LottoValidation from './Validations/LottoValidation.js';
import inputs from './View/inputs.js';

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = [];
  }

  async #validate() {
    try {
      const lottoAnswer = await inputs.enterLotto();
      const strings = lottoAnswer.split(',');
      const validation = new LottoValidation(strings);

      validation.finishValidation();

      return strings;
    } catch (error) {
      Console.print(error.message);
      return this.#validate();
    }
  }

  #setLotto(answer) {
    this.#numbers = lottoModel.convertToNumber(answer);
  }

  async controlLotto() {
    const answer = await this.#validate();

    this.#setLotto(answer);
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
