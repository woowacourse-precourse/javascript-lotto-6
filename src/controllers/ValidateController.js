import ERROR_MESSAGE from '../constants/ErrorMessage';
import NUMBER from '../constants/Number';

const ValidateContoller = {
  isNumber(number) {
    if (Number.isNaN(number)) throw Error(ERROR_MESSAGE.INVALID_NUMBER);
  },

  isPurchaseUnit(amount) {
    if (amount % NUMBER.PURCHASE_AMOUNT_UNIT > 0)
      throw Error(ERROR_MESSAGE.INVALID_PURCHASE_UNIT);
  },

  isNumberInRange(number) {
    if (number < NUMBER.MIN_IN_RANGE || number > NUMBER.MAX_IN_RANGE)
      throw Error(ERROR_MESSAGE.INVALID_RANGE);
  },

  isWinningNumberLength(length) {
    if (length !== NUMBER.LOTTO_NUMBER_OF_NUMBERS)
      throw Error(ERROR_MESSAGE.INVALID_NUMBER_OF_WINNING_NUMBERS);
  },

  isDuplicateWinningNumbers(winngNumberList) {
    if (winngNumberList.length > new Set(winngNumberList).size)
      throw Error(ERROR_MESSAGE.INVALID_DUPLICATE_WINNING_NUMBERS);
  },

  isDuplicateBonusNumber(winningNumerList, bonusNumber) {
    if (winningNumerList.include(bonusNumber))
      throw Error(ERROR_MESSAGE.INVALID_DUPLICATE_BONUS_NUMBER);
  },
};

export default ValidateContoller;
