import CustomError from './CustomError.js';
import LottoRank from './LottoRank.js';
import { ERROR_MESSAGE } from './constants/message.js';
import { hasDuplicateNumber } from './utils/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (hasDuplicateNumber(numbers)) {
      throw new CustomError(ERROR_MESSAGE.duplicate);
    }
  }

  getRank(winningNumbers, bonusNumber) {
    const lottoRank = new LottoRank(this.#numbers, winningNumbers, bonusNumber);
    return lottoRank.getRank();
  }
}

export default Lotto;
