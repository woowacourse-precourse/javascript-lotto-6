import { LOTTO_NUMBERS_COUNT, MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER } from "./constants.js"

class LottoNumberValidator {
  static checkNumberInRange(number) {
    return MIN_LOTTO_NUMBER <= number && number <= MAX_LOTTO_NUMBER;
  }

  static checkAllNumbersInRange(numbers) {
    const isAllInRange = numbers.every(LottoNumberValidator.checkNumberInRange);

    return isAllInRange;
  }

  static checkNumbersCount(numbers) {
    return numbers.length === LOTTO_NUMBERS_COUNT;
  }

  static checkAllNumbersUnique(numbers) {
    const uniquNumbers = [...new Set(numbers)];
    
    return uniquNumbers.length === numbers.length;
  }
}

export default LottoNumberValidator;
