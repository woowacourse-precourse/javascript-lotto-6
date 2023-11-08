import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR, LOTTO } from '../config.js';
import { isPositiveInteger } from '../utils.js';

class Lotto {
  static generateLottoNumbers() {
    const { RANGE, COUNT } = LOTTO;
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(RANGE.START, RANGE.END, COUNT);

    return lottoNumbers.sort((a, b) => a - b);
  }

  static createLottos(inputAmount) {
    const lottoCount = inputAmount / LOTTO.PRICE;
    return Array.from({ length: lottoCount }, () => new Lotto(Lotto.generateLottoNumbers()));
  }

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR.IS_NOT_LOTTO_LENGTH);
    }
    if (!this.#isPositiveInteger(numbers)) throw new Error(ERROR.IS_NOT_POSITIVE_INTEGER);
    if (this.#isDuplicated(numbers)) {
      throw new Error(ERROR.IS_DUPLICATED);
    }
    if (this.#isRangeInvalid(numbers)) throw new Error(ERROR.IS_NOT_IN_LOTTO_RANGE);
  }

  #isDuplicated(numbers) {
    const set = new Set(numbers);

    return set.size !== numbers.length;
  }

  #isPositiveInteger(numbers) {
    return numbers.every(isPositiveInteger);
  }

  #isRangeInvalid(numbers) {
    const { START, END } = LOTTO.RANGE;

    return numbers.some((number) => number < START || number > END);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
