import {
  DRAW_NUMBERS,
  LOTTO_PRICE,
  PRICE_1ST,
  PRICE_2ND,
  PRICE_3RD,
  PRICE_4TH,
  PRICE_5TH,
} from '../constants/numbers.js';
import { ERROR_MESSAGE } from '../constants/messages.js';
import {
  STRING_1TH,
  STRING_2ND,
  STRING_3RD,
  STRING_4TH,
  STRING_5TH,
} from '../constants/strings.js';
import InputValidator from './InputValidator.js';
import Lotto from '../Lotto.js';
import NumberGenerator from './NumberGenerator.js';
import ValidationError from './ValidationError.js';

class LottoMaker {
  #lottos;

  #publishCount;

  #winningLotto;

  #bonusNumber;

  constructor() {
    this.#lottos = [];
    this.#publishCount = 0;
    this.#winningLotto = undefined;
    this.#bonusNumber = undefined;
  }

  calcLottoPublishCount(price) {
    return price / LOTTO_PRICE;
  }

  validateLottoPublishCount(count) {
    if (InputValidator.checkNaN(count)) {
      throw new ValidationError(ERROR_MESSAGE.isNaN).toString();
    }
    if (!InputValidator.checkInteger(count)) {
      throw new ValidationError(ERROR_MESSAGE.notDividedPrice).toString();
    }
    if (!InputValidator.checkPositiveNumber(count)) {
      throw new ValidationError(ERROR_MESSAGE.negativePrice).toString();
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
      throw new ValidationError(ERROR_MESSAGE.invalidNumber).toString();
    }
    if (this.#winningLotto.numbers.includes(number)) {
      throw new ValidationError(ERROR_MESSAGE.duplicateBonusNumber).toString();
    }
    if (InputValidator.checkNaN(number)) {
      throw new ValidationError(ERROR_MESSAGE.isNaN).toString();
    }
  }

  getRanking(count, numbers) {
    switch (count) {
      case 3:
        return STRING_5TH;
      case 4:
        return STRING_4TH;
      case 5:
        if (numbers.includes(this.#bonusNumber)) {
          return STRING_2ND;
        }
        return STRING_3RD;
      case 6:
        return STRING_1TH;
      default:
        return null;
    }
  }

  calcScore() {
    const score = {
      '1st': 0,
      '2nd': 0,
      '3rd': 0,
      '4th': 0,
      '5th': 0,
    };
    this.#lottos.forEach(lotto => {
      const count = this.getMatchCount(lotto.numbers);
      const ranking = this.getRanking(count, lotto.numbers);
      if (ranking) {
        score[ranking] += 1;
      }
    });
    return score;
  }

  getMatchCount(inputNumbers) {
    const winningNumbers = this.#winningLotto.numbers;
    let count = 0;
    for (let index = 0; index < inputNumbers.length; index += 1) {
      if (inputNumbers.includes(winningNumbers[index])) {
        count += 1;
      }
    }
    return count;
  }

  getPrizePrice(score) {
    let prizePrice = 0;
    if (score[STRING_1TH]) {
      prizePrice += PRICE_1ST * score[STRING_1TH];
    }
    if (score[STRING_2ND]) {
      prizePrice += PRICE_2ND * score[STRING_2ND];
    }
    if (score[STRING_3RD]) {
      prizePrice += PRICE_3RD * score[STRING_3RD];
    }
    if (score[STRING_4TH]) {
      prizePrice += PRICE_4TH * score[STRING_4TH];
    }
    if (score[STRING_5TH]) {
      prizePrice += PRICE_5TH * score[STRING_5TH];
    }
    return prizePrice;
  }

  calcRate(score) {
    const prizePrice = this.getPrizePrice(score);
    const publishPrice = this.#publishCount * LOTTO_PRICE;

    let divisionResult = publishPrice / prizePrice;
    if (divisionResult) {
      divisionResult = 0;
    }

    return (divisionResult * 100).toFixed(1);
  }

  set publishCount(count) {
    this.#publishCount = count;
  }

  get publishCount() {
    return this.#publishCount;
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
