import { NUMBER, ERROR_MESSAGE } from '../utils/constants.js';

class Validator {
  validateUserInputPurchaseMoney(userInputPurchaseMoney) {
    if (Number.isNaN(userInputPurchaseMoney)) {
      throw new Error(ERROR_MESSAGE.isNotNumber);
    }

    if (userInputPurchaseMoney <= 0) {
      throw new Error(ERROR_MESSAGE.negativeNumber);
    }

    if (userInputPurchaseMoney % NUMBER.purchaseMoneyDivisor !== 0) {
      throw new Error(ERROR_MESSAGE.inValidMoneyAmount);
    }

    return true;
  }

  validateUserInputWinningNumbers(userInputWinningNumbers) {
    const UNIQUE_NUMBER_SET = new Set(userInputWinningNumbers);

    if (UNIQUE_NUMBER_SET.size !== userInputWinningNumbers.length) {
      throw new Error(ERROR_MESSAGE.numDuplicated);
    }

    if (userInputWinningNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.isNotSixDigit);
    }

    userInputWinningNumbers.forEach((number) => {
      this.validateUserInputWinningNumber(number);
    });

    return true;
  }

  validateUserInputWinningNumber(userInputWinningNumber) {
    if (Number.isNaN(userInputWinningNumber)) {
      throw new Error(ERROR_MESSAGE.isNotNumberForWinningNum);
    }

    if (userInputWinningNumber <= 0 || userInputWinningNumber > 45) {
      throw new Error(ERROR_MESSAGE.isNotInRange);
    }
  }

  validateUserInputBonusNumber(userInputBonusNumber, winningNumbers) {
    if (Number.isNaN(userInputBonusNumber)) {
      throw new Error(ERROR_MESSAGE.isNotAnumber);
    }

    if (userInputBonusNumber <= 0 || userInputBonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.isNotInRange);
    }

    if (winningNumbers.includes(userInputBonusNumber)) {
      throw new Error(ERROR_MESSAGE.bonusNumDuplicated);
    }

    return true;
  }
}

export default Validator;
