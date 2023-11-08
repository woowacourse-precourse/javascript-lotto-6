import { printErrorMessage } from '../utils/printMessage.js';
import MESSAGES from '../constants/messages.js';
import NUMBERS from '../constants/numbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBERS.lottoNumberLength) {
      throw new Error(`${MESSAGES.errorHeader}${MESSAGES.invalidLength}`);
    }

    const lottoNumberRange = number =>
      number >= NUMBERS.minLottoNumber && number <= NUMBERS.maxLottoNumber;

    if (!numbers.every(lottoNumberRange)) {
      throw new Error(`${MESSAGES.errorHeader}${MESSAGES.invalidRange}`);
    }

    const deleteDuplication = new Set(numbers);

    if (numbers.length !== deleteDuplication.size) {
      throw new Error(`${MESSAGES.errorHeader}${MESSAGES.duplicatedNumber}`);
    }
  }
}

export default Lotto;
