import { LOTTO_RANKS, MATCHED_COUNT } from '../constants/lotto.js';
import lottoNumberValidator from '../validators/lottoNumbersValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    lottoNumberValidator.validateType(numbers);
    lottoNumberValidator.validateCount(numbers);
    lottoNumberValidator.validateRange(numbers);
    lottoNumberValidator.validateUniqueness(numbers);
  }

  #checkMatchedCount(winningNumbers) {
    const matchingCount = this.#numbers.filter((number) => winningNumbers.includes(number)).length;
    return matchingCount;
  }

  #hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  #getLottoRank(machedCount, hasBonusNumber) {
    if (machedCount === MATCHED_COUNT.six) return LOTTO_RANKS.first;
    if (machedCount === MATCHED_COUNT.five && hasBonusNumber) return LOTTO_RANKS.second;
    if (machedCount === MATCHED_COUNT.five) return LOTTO_RANKS.third;
    if (machedCount === MATCHED_COUNT.four) return LOTTO_RANKS.fourth;
    if (machedCount === MATCHED_COUNT.three) return LOTTO_RANKS.fifth;
    return LOTTO_RANKS.nothing;
  }

  getLottoRank(winningNumbers, bonusNumber) {
    const matchedCount = this.#checkMatchedCount(winningNumbers);
    const hasBounsNumber = this.#hasBonusNumber(bonusNumber);
    const lottoRank = this.#getLottoRank(matchedCount, hasBounsNumber);

    return lottoRank;
  }

  getNumbers() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
