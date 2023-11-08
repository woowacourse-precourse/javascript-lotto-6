import { error, condition } from '../consts';

const isInteger = (number) => {
  if (!Number.isInteger(number)) {
    throw error.numberTypeError;
  }
};

const validateLottonRange = (number) => {
  if (number < condition.lottoMinNumber || number > condition.lottoMaxNumber) {
    throw error.numberRangeError;
  }
};

const Validator = {
  validateInput(input) {
    if (input.trim().length === condition.inputEmptyLength) {
      throw error.inputEmptyError;
    }
  },

  validatePurchaseAmount(purchaseAmount) {
    isInteger(purchaseAmount);
    if (purchaseAmount % condition.oneLottoPrice !== condition.correctRemain) {
      throw error.purchaseAmountError;
    }
  },

  validateWinnigNumbersString(winningNumbers) {
    if (!Number(winningNumbers.split(condition.separator).join(''))) {
      throw error.winningNumbersSeparatorError;
    }
  },

  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== condition.winningNumbersLength) {
      throw error.winningNumbersLengthError;
    }
    if (new Set(winningNumbers).size !== condition.winningNumbersLength) {
      throw error.winningNumbersDuplicationError;
    }
    winningNumbers.forEach((number) => {
      isInteger(number);
      validateLottonRange(number);
    });
  },

  validateBonusNumber(bonusNumber) {
    isInteger(bonusNumber);
    validateLottonRange(bonusNumber);
  },
};

export default Validator;
