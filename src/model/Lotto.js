import ERRORMESSAGES from '../constants/errorMessages';
import NUMBERS from '../constants/numbers';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBERS.lottoNumberLength) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.invalidLength}`,
      );
    }

    const lottoNumberRange = number =>
      number >= NUMBERS.minLottoNumber && number <= NUMBERS.maxLottoNumber;

    if (!numbers.every(lottoNumberRange)) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.invalidRange}`,
      );
    }

    const deleteDuplication = new Set(numbers);

    if (numbers.length !== deleteDuplication.size) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.duplicatedNumber}`,
      );
    }

    return this;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
