import { error, condition } from '../consts.js';

const isInteger = (number) => {
  if (!Number.isInteger(number)) {
    throw error.numberTypeError;
  }
};

const validateLottoRange = (number) => {
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

  validateLottoLength(numbers) {
    if (!numbers || numbers.length !== condition.lottoNumbersLength) {
      throw error.LottoNumbersLengthError;
    }
  },

  validateLottoDuplicate(numbers) {
    if (new Set(numbers).size !== condition.lottoNumbersLength) {
      throw error.LottoNumbersDuplicationError;
    }
  },

  validateWinnigNumbersString(winningNumbers) {
    if (!Number(winningNumbers.split(condition.separator).join(''))) {
      throw error.winningNumbersSeparatorError;
    }
  },

  validateWinningNumbers(winningNumbers) {
    this.validateLottoLength(winningNumbers);
    this.validateLottoDuplicate(winningNumbers);
    winningNumbers.forEach((number) => {
      isInteger(number);
      validateLottoRange(number);
    });
  },

  validateBonusNumber(bonusNumber) {
    isInteger(bonusNumber);
    validateLottoRange(bonusNumber);
  },

  validateBonusNumberDuplicate(winningNumbers, bonusNumber) {
    const totalNumbers = [...winningNumbers, bonusNumber];
    const totalNumbersLength =
      condition.lottoNumbersLength + condition.bonusNumberLength;

    if (new Set(totalNumbers).size !== totalNumbersLength) {
      throw error.LottoNumbersDuplicationError;
    }
  },
};

export default Validator;
