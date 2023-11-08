import ERROR_MESSAGE from '../constants/ErrorMessage';
import NUMBER from '../constants/Number';

const Validate = {
  isNumber(number) {
    const convertNumber = Number(number);
    if (Number.isNaN(convertNumber)) throw Error(ERROR_MESSAGE.INVALID_NUMBER);
  },

  isInteger(number) {
    if (!Number.isInteger(number)) throw Error(ERROR_MESSAGE.INVALID_INTEGER);
  },

  isPositive(number) {
    if (number <= 0) throw Error(ERROR_MESSAGE.INVALID_POSITIVE);
  },

  isPurchaseUnit(amount) {
    if (amount % NUMBER.PURCHASE_AMOUNT_UNIT > 0) throw Error(ERROR_MESSAGE.INVALID_PURCHASE_UNIT);
  },

  isNumberInRange(number) {
    if (number < NUMBER.MIN_IN_RANGE || number > NUMBER.MAX_IN_RANGE)
      throw Error(ERROR_MESSAGE.INVALID_RANGE);
  },

  isWinningNumbersLength(winningNumbers) {
    if (winningNumbers.length !== NUMBER.LOTTO_NUMBER_OF_NUMBERS)
      throw Error(ERROR_MESSAGE.INVALID_NUMBER_OF_WINNING_NUMBERS);
  },

  isDuplicateWinningNumbers(winngNumbers) {
    if (winngNumbers.length > new Set(winngNumbers).size)
      throw Error(ERROR_MESSAGE.INVALID_DUPLICATE_WINNING_NUMBERS);
  },

  isDuplicateBonusNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber))
      throw Error(ERROR_MESSAGE.INVALID_DUPLICATE_BONUS_NUMBER);
  },
};

export default Validate;
