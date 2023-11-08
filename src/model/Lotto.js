import { STRINGS } from '../Constants';

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
  }

  getString() {
    const lottoString = this.#numbers.join(STRINGS.lottoDelimiter);
    return `${STRINGS.lottoPrefix}${lottoString}${STRINGS.lottoSuffix}`;
  }
}

export default Lotto;
