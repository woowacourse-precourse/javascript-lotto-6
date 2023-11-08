import { Console } from '@woowacourse/mission-utils';
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
    try {
      if (input.trim().length === condition.inputEmptyLength) {
        throw error.inputEmptyError;
      }
    } catch (err) {
      Console.print(err);
    }
  },

  validatePurchaseAmount(purchaseAmount) {
    try {
      isInteger(purchaseAmount);
      if (
        purchaseAmount % condition.oneLottoPrice !==
        condition.correctRemain
      ) {
        throw error.purchaseAmountError;
      }
    } catch (err) {
      Console.print(err);
    }
  },

  validateLottoLength(numbers) {
    try {
      if (!numbers || numbers.length !== condition.lottoNumbersLength) {
        throw error.LottoNumbersLengthError;
      }
    } catch (err) {
      Console.print(err);
    }
  },

  validateLottoDuplicate(numbers) {
    try {
      if (new Set(numbers).size !== condition.lottoNumbersLength) {
        throw error.LottoNumbersDuplicationError;
      }
    } catch (err) {
      Console.print(err);
    }
  },

  validateWinnigNumbersString(winningNumbers) {
    try {
      if (!Number(winningNumbers.split(condition.separator).join(''))) {
        throw error.winningNumbersSeparatorError;
      }
    } catch (err) {
      Console.print(err);
    }
  },

  validateWinningNumbers(winningNumbers) {
    try {
      this.validateLottoLength(winningNumbers);
      this.validateLottoDuplicate(winningNumbers);
      winningNumbers.forEach((number) => {
        isInteger(number);
        validateLottoRange(number);
      });
    } catch (err) {
      Console.print(err);
    }
  },

  validateBonusNumber(bonusNumber) {
    try {
      isInteger(bonusNumber);
      validateLottoRange(bonusNumber);
    } catch (err) {
      Console.print(err);
    }
  },

  validateBonusNumberDuplicate(winningNumbers, bonusNumber) {
    try {
      const totalNumbers = [...winningNumbers, bonusNumber];
      const totalNumbersLength =
        condition.lottoNumbersLength + condition.bonusNumberLength;

      if (new Set(totalNumbers).size !== totalNumbersLength) {
        throw error.LottoNumbersDuplicationError;
      }
    } catch (err) {
      Console.print(err);
    }
  },
};

export default Validator;
