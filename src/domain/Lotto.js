import Validator from '../utils/Validator';
import { Random } from '@woowacourse/mission-utils';
import { MAGIC_NUMBER } from '../constants/number';

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
    const lottoCount = numbers / MAGIC_NUMBER.oneThousand;

    const Lottos = Array.from({ length: lottoCount }, () =>
      Random.pickUniqueNumbersInRange(
        MAGIC_NUMBER.lottoStart,
        MAGIC_NUMBER.lottoEnd,
        MAGIC_NUMBER.lottoCount
      ).sort((a, b) => a - b)
    );

    return Lottos;
  }
}

export default Lotto;
