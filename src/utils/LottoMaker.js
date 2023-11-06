import { DRAW_NUMBERS, LOTTO_PRICE } from '../constants/numbers.js';
import { ERROR_MESSAGE } from '../constants/messages.js';
import InputValidator from './InputValidator.js';
import Lotto from '../Lotto.js';
import NumberGenerator from './NumberGenerator.js';
import ValidationError from './ValidationError.js';

class LottoMaker {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  calcLottoPublishCount(price) {
    return price / LOTTO_PRICE;
  }

  validatePublishCount(count) {
    if (InputValidator.checkNaN(count)) {
      throw new ValidationError(ERROR_MESSAGE.isNaN);
    }
    if (!InputValidator.checkInteger(count)) {
      throw new ValidationError(ERROR_MESSAGE.notDividedPrice);
    }
    if (!InputValidator.checkPositiveNumber(count)) {
      throw new ValidationError(ERROR_MESSAGE.negativePrice);
    }
  }

  createNumbers() {
    const numbers = [];

    while (numbers.length !== DRAW_NUMBERS) {
      const randomNumber = NumberGenerator.createRandomNumber();
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers.sort((a, b) => a - b);
  }

  publishedLottos(publishCount) {
    for (let count = 0; count < publishCount; count += 1) {
      const numbers = this.createNumbers();
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }

  get lottos() {
    return this.#lottos;
  }
}

export default LottoMaker;
