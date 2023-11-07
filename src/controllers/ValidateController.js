import ERROR_MESSAGE from '../constants/ErrorMessage';
import NUMBER from '../constants/Number';
import Convert from '../utils/Convert';

const Validate = {
  isNumber(number) {
    if (Number.isNaN(number)) throw Error(ERROR_MESSAGE.INVALID_NUMBER);
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

  isDuplicateBonusNumber(winningNumers, bonusNumber) {
    if (winningNumers.includes(bonusNumber))
      throw Error(ERROR_MESSAGE.INVALID_DUPLICATE_BONUS_NUMBER);
  },
};

const ValidateController = {
  async validatePurchaseLottoAmount(amountString) {
    const amount = Convert.convertToNumber(amountString);

    Validate.isNumber(amount);
    Validate.isPurchaseUnit(amount);

    return amount;
  },

  async validateWinningNumbers(numbersString) {
    const numbers = Convert.convertToList(numbersString);

    numbers.map(number => Validate.isNumberInRange(number));
    Validate.isWinningNumbersLength(numbers);
    Validate.isDuplicateWinningNumbers(numbers);
    numbers.map(number => Validate.isNumberInRange(number));

    return numbers;
  },

  async validateBonusNumber(winningNumbers, numberString) {
    const number = Convert.convertToNumber(numberString);

    Validate.isNumber(number);
    Validate.isNumberInRange(number);
    Validate.isDuplicateBonusNumber(winningNumbers, number);

    return number;
  },
};

export default ValidateController;
