import Lotto from '../Lotto.js';
import { MESSAGES, NUMBER_BOUNDS } from '../constants/constants.js';
import { Random, Console } from '@woowacourse/mission-utils';

class LottoStore {
  #winningNumbers;
  #bounsNumber;

  constructor() {}

  get winningNumbers() {
    return this.#winningNumbers;
  }

  set winningNumbers(winningNumbers) {
    this.#winningNumbers = new Lotto(winningNumbers);
  }

  get bonusNumber() {
    return this.#bounsNumber;
  }

  set bonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bounsNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    if (
      !this.#winningNumbers.every(
        (number) => number >= NUMBER_BOUNDS.MIN && number <= NUMBER_BOUNDS.MAX,
      )
    ) {
      throw new Error(MESSAGES.ERROR.LOTTO_NUMBER_OUT_OF_BOUNDS_EXCEPTION);
    }
    if (this.#winningNumbers.includes(bonusNumber)) {
      throw new Error(MESSAGES.ERROR.BONUS_NUMBER_DUPLICATION_EXCEPTION);
    }
  }

  generateLottos(purchaseLottoCount) {
    let lottos = [];

    for (let i = 0; i < purchaseLottoCount; i++) {
      const generateNumber = Random.pickUniqueNumbersInRange(
        NUMBER_BOUNDS.MIN,
        NUMBER_BOUNDS.MAX,
        NUMBER_BOUNDS.COUNT,
      );

      const sortedGenerateNumber = this.sortArrayAscending(generateNumber);
      lottos.push(sortedGenerateNumber);
    }

    return lottos;
  }

  sortArrayAscending(array) {
    return array.sort((a, b) => a - b);
  }
}

export default LottoStore;
