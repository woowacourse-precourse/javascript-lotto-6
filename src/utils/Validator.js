import ErrorMessage from '../constants/ErrorMessage.js';
import GAME_SETTINGS from '../constants/LottoSettings.js';
import { printErrorMessage } from './messages.js';

const { LOTTO_PRICE, MIN_NUMBER, MAX_NUMBER, NUMBER_LENGTH } = GAME_SETTINGS;

class Validator {
  static purchaseCostValidator(input) {
    const purchaseCost = parseInt(input, 10);
    if (Number.isNaN(Number(input))) {
      printErrorMessage(ErrorMessage.INVALID_PURCHASE_COST);
    }
    if (purchaseCost < 0) {
      printErrorMessage(ErrorMessage.INVALID_PURCAHSE_COST_RANGE);
    }
    if (purchaseCost % LOTTO_PRICE !== 0) {
      printErrorMessage(ErrorMessage.INVALID_PURCHASE_COST_UNIT);
    }
  }

  static winningNumberValidator(input) {
    const winningNumber = input.split(',').map(number => {
      const parseNumber = parseInt(number.trim(), 10);
      if (Number.isNaN(Number(number))) {
        printErrorMessage(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
      }
      if (parseNumber < MIN_NUMBER || parseNumber > MAX_NUMBER) {
        printErrorMessage(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
      }
      return parseNumber;
    });
    if (winningNumber.length !== NUMBER_LENGTH) {
      printErrorMessage(ErrorMessage.INVALID_LOTTO_NUMBERS_LENGTH);
    }
    if (new Set(winningNumber).size !== NUMBER_LENGTH) {
      printErrorMessage(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIQUENESS);
    }
    return winningNumber;
  }

  static bonusNumberValidator(input, winningNumber) {
    const BonusNumber = parseInt(input, 10);
    if (Number.isNaN(Number(input))) {
      printErrorMessage(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
    }
    if (BonusNumber < MIN_NUMBER || BonusNumber > MAX_NUMBER) {
      printErrorMessage(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
    }
    if (winningNumber.includes(BonusNumber)) {
      printErrorMessage(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIQUENESS);
    }
    return BonusNumber;
  }
}

export default Validator;
