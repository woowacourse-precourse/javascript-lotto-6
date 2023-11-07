import {
  validateIsNumber,
  validateNoWhitespace,
  validateRange,
  validateNoDuplicatesInBonus
} from "./utils/validator";

class BonusNumber {
  constructor(number, winningNumbers) {
    validateIsNumber(number);
    validateNoWhitespace(number);
    validateRange(number);
    validateNoDuplicatesInBonus(number, winningNumbers);
    this.numbers = number;
  }
}
export default BonusNumber;
