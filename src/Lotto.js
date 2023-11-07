import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR, LOTTO } from './config.js';
import { isDuplicated, isPositiveInteger } from './utils.js';

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
    if (isDuplicated(numbers)) {
      throw new Error(ERROR.IS_DUPLICATED);
    }
    if (!numbers.every(isPositiveInteger)) throw new Error(ERROR.IS_NOT_POSITIVE_INTEGER);
    if (isDuplicated(numbers)) throw new Error(ERROR.IS_DUPLICATED);
    if (numbers.some((number) => number < LOTTO.RANGE.START || number > LOTTO.RANGE.END)) {
      throw new Error(ERROR.IS_NOT_IN_LOTTO_RANGE);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
