import { error } from './constant.js';
import { numbers } from './constant.js';
class Validator {
  static validateThousandWonUnit(userInput) {
    if (userInput % numbers.THOUSAND !== 0) {
      throw new Error(error.INPUT_MONEY_THOUSAND);
    }
  }

  static validateUnderThousandWon(userInput) {
    if (userInput < numbers.THOUSAND) {
      throw new Error(error.INPUT_MONEY_LIMIT);
    }
  }

  static validateDuplication(userInput) {
    if (new Set(userInput).size !== numbers.MAX_LENGTH) {
      throw new Error(error.INPUT_NUMBER_DUPLICATION);
    }
  }

  static validateSix(userInput) {
    if (userInput.length !== numbers.MAX_LENGTH) {
      throw new Error(error.INPUT_NUMBER_COUNT);
    }
  }

  static validateInteger(userInput) {
    if (isNaN(userInput)) {
      throw new Error(error.INPUT_INTEGER);
    }
  }

  static validateNumbersRange(userInputNumbers) {
    if (!userInputNumbers.every((number) => number >= numbers.MIN_NUMBER && number <= numbers.MAX_NUMBER)) {
      throw new Error(error.INPUT_RANGE);
    }
  }

  static validateBonusNumberRange(userInputNumber) {
    if (userInputNumber < numbers.MIN_NUMBER || userInputNumber > numbers.MAX_NUMBER) {
      throw new Error(error.INPUT_RANGE);
    }
  }

  static validateBonusNumberDuplication(bonusNumber, userInputNumbers) {
    if (userInputNumbers.includes(bonusNumber)) {
      throw new Error(error.BONUS_NUMBER_DUPLICATION);
    }
  }

  static validateMoney(userInputMoney) {
    this.validateInteger(userInputMoney);
    this.validateUnderThousandWon(userInputMoney);
    this.validateThousandWonUnit(userInputMoney);
    return userInputMoney;
  }

  static validateNumbers(userInputNumbers) {
    this.validateSix(userInputNumbers);
    this.validateDuplication(userInputNumbers);
    this.validateNumbersRange(userInputNumbers);
    return userInputNumbers;
  }

  static validateBonusNumber(bonusNumber, userInputNumbers) {
    this.validateBonusNumberDuplication(bonusNumber, userInputNumbers);
    this.validateBonusNumberRange(bonusNumber);
    this.validateInteger(bonusNumber);
    return bonusNumber;
  }
}

export default Validator;