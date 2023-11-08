import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from '../constant/index.js';
import { LottoValidation } from './index.js';

const {
  RANGE: { START, END },
  COUNT,
  PRICE,
} = LOTTO;

class Lotto {
  static generateLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(START, END, COUNT);

    return lottoNumbers.sort((a, b) => a - b);
  }

  static createLottos(inputAmount) {
    const lottoCount = inputAmount / PRICE;
    return Array.from({ length: lottoCount }, () => new Lotto(Lotto.generateLottoNumbers()));
  }

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoValidation.lotto(numbers);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
