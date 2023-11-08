import { ERROR_MESSAGE } from '../modules/constant.js';
import ValidationUtils from '../utils/ValidationUtils.js';

const { checkIsNumber, checkIncludedZero, checkIsDuplicated } = ValidationUtils;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.isNotSixLength);

    const lottoNumberHasCharacter = numbers.filter(
      (number) => !checkIsNumber(number)
    );

    if (lottoNumberHasCharacter.length !== 0)
      throw new Error(ERROR_MESSAGE.isNotNumber);

    const lottoNumbersIncludedZero = checkIncludedZero(numbers);
    if (lottoNumbersIncludedZero) throw new Error(ERROR_MESSAGE.isNotInRange);

    const lottoNumberIsDuplicated = checkIsDuplicated(numbers);
    if (lottoNumberIsDuplicated) throw new Error(ERROR_MESSAGE.isDuplicated);
  }

  getLottoNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
