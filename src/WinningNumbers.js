import {
  validateLength,
  validateNoDuplicates,
  validateNoWhitespaceInArray,
  validateRangeInArray,
  validateAllNumbers,
} from "./utils/validator";

class WinningNumbers {
  constructor(numbers) {
    validateLength(numbers);
    validateNoDuplicates(numbers);
    validateNoWhitespaceInArray(numbers);
    validateAllNumbers(numbers);
    validateRangeInArray(numbers);
    this.numbers = numbers;
  }
}
export default WinningNumbers;
