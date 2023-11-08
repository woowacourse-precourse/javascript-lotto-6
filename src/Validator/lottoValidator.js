import { ERROR_MESSAGE, LOTTO_INFO } from '../Utils/constants';

const checkLottoRange = number => {
  if (number < LOTTO_INFO.MIN_NUMBER || LOTTO_INFO.MAX_NUMBER < number) {
    throw new Error(ERROR_MESSAGE.INVALID_WIN_NUMBER_RANGE);
  }
};

const checkDuplicate = numbers => {
  const duplicatedSet = new Set();
  numbers.forEach(number => {
    if (duplicatedSet.has(number)) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS_DUPLICATE);
    }
    duplicatedSet.add(number);
  });
};

const validatePurchaseAmount = purchaseAmount => {
  if (purchaseAmount % LOTTO_INFO.PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_UNIT);
  }
  if (
    purchaseAmount < LOTTO_INFO.MIN_LOTTO_MONEY 
    || LOTTO_INFO.MAX_LOTTO_MONEY < purchaseAmount
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_RANGE);
  }
};

const validateWinningNumbers = numbers => {
  if (numbers.length !== LOTTO_INFO.LENGTH) {
    throw new Error(ERROR_MESSAGE.INVALID_WIN_NUMBER_SIZE);
  }
  checkDuplicate(numbers);
  numbers.forEach(number => {
    checkLottoRange(number);
  });
};

const validateBonusNumber = (numbers, bonus) => {
  checkDuplicate([...numbers, bonus]);
  checkLottoRange(bonus);
};

export default {
  validatePurchaseAmount,
  validateWinningNumbers,
  validateBonusNumber,
};
