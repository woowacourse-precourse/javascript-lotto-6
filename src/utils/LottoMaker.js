import { DRAW_NUMBERS, LOTTO_PRICE } from '../constants/numbers.js';
import { ERROR_MESSAGE } from '../constants/messages.js';
import InputValidator from './InputValidator.js';
import Lotto from '../Lotto.js';
import NumberGenerator from './NumberGenerator.js';
import ValidationError from './ValidationError.js';

class LottoMaker {
  #lottos;

  #winningLotto;

  #bonusNumber;

  constructor() {
    this.#lottos = [];
    this.#winningLotto = undefined;
    this.#bonusNumber = undefined;
  }

  calcLottoPublishCount(price) {
    return price / LOTTO_PRICE;
  }

  validateLottoPublishCount(count) {
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

  getSortedNumbers() {
    const numbers = [];

    while (numbers.length !== DRAW_NUMBERS) {
      const randomNumber = NumberGenerator.createRandomNumber();
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers.sort((a, b) => a - b);
  }

  publishLottos(publishCount) {
    for (let count = 0; count < publishCount; count += 1) {
      const numbers = this.getSortedNumbers();
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }

  validateBonusNumber(number) {
    if (!InputValidator.checkIncludeNumber(number)) {
      throw new ValidationError(ERROR_MESSAGE.invalidNumber);
    }
    if (this.#winningLotto.numbers.includes(number)) {
      throw new ValidationError(ERROR_MESSAGE.duplicateBonusNumber);
    }
    if (InputValidator.checkNaN(number)) {
      throw new ValidationError(ERROR_MESSAGE.isNaN);
    }
  }

  set winningLotto(numbers) {
    this.#winningLotto = new Lotto(numbers);
  }

  get winningLotto() {
    return this.#winningLotto;
  }

  set bonusNumber(number) {
    this.#bonusNumber = number;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  get lottos() {
    return this.#lottos;
  }
}

export default LottoMaker;
