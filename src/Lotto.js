import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from './config.js';
import { isDuplicated } from './utils.js';

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
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (isDuplicated(numbers)) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
