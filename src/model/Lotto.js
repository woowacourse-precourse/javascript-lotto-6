import { STRINGS } from '../Constants';
import Validator from '../Validator';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  getString() {
    const lottoString = this.#numbers.join(STRINGS.lottoDelimiter);
    return `${STRINGS.lottoPrefix}${lottoString}${STRINGS.lottoSuffix}`;
  }
}

export default Lotto;
