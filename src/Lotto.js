import { Console } from '@woowacourse/mission-utils';
import { lottoCount } from './constants/constants';
import { errorMessage } from './constants/messages';

import Validation from './validations/Validation';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (Validation.checkLength(numbers)) {
      throw new Error(errorMessage.INVALID_LENGTH);
    }
    if (Validation.checkLottoNumber(numbers)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (Validation.checkDuplicates(numbers)) {
      throw new Error(errorMessage.HAS_DUPLICATES);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  printLottoNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  compareLotto(winningLotto) {
    const compareCount = this.getLottoNumbers().filter(number =>
      winningLotto.getLottoNumbers().includes(number),
    );
    if (
      compareCount.length === lottoCount.THIRD &&
      this.getLottoNumbers().includes(winningLotto.bonus)
    ) {
      return lottoCount.SECOND;
    }
    return compareCount.length;
  }
}

export default Lotto;
