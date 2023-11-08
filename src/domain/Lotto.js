import Validator from '../utils/Validator.js';
import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.LottoValidator(numbers);
  }

  static generateLottoNumber(numbers) {
    const Lottos = [];
    const lottoCount = numbers / 1000;

    for (let i = 0; i < lottoCount; i++) {
      const purchaseLotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      Lottos.push(purchaseLotto);
    }

    return Lottos;
  }
}

export default Lotto;
