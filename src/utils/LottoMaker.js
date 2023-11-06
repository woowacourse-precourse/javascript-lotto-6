import { Random } from '@woowacourse/mission-utils';
import {
  DRAW_NUMBERS,
  LOTTO_PRICE,
  PRICE_1ST,
  PRICE_2ND,
  PRICE_3RD,
  PRICE_4TH,
  PRICE_5TH,
  RANDOM_NUMBER,
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
    const numbers = Random.pickUniqueNumbersInRange(
      RANDOM_NUMBER.from,
      RANDOM_NUMBER.to,
      DRAW_NUMBERS,
    );

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
      '1ST': 0,
      '2ND': 0,
      '3RD': 0,
      '4TH': 0,
      '5TH': 0,
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
    const prizeArray = [
      [STRING_1TH, PRICE_1ST],
      [STRING_2ND, PRICE_2ND],
      [STRING_3RD, PRICE_3RD],
      [STRING_4TH, PRICE_4TH],
      [STRING_5TH, PRICE_5TH],
    ];

    return prizeArray.reduce(
      (prev, curr) => prev + curr[1] * score[curr[0]],
      0,
    );
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
