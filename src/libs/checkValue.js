import {
  AMOUNT,
  BONUS_NUMBER,
  ERROR_MESSAGE,
  LOTTO,
  PURCHASE_AMOUNT,
} from './constants';

export const checkValue = {
  //구매금액
  purchaseAmount(purchaseAmount) {
    if (isNaN(purchaseAmount))
      return { errorMessage: createErrorMessage.type(PURCHASE_AMOUNT) };
    if (purchaseAmount < AMOUNT.MIN)
      return { errorMessage: ERROR_MESSAGE.MIN_AMOUNT };
    if (purchaseAmount % AMOUNT.UNIT !== 0)
      return { errorMessage: ERROR_MESSAGE.UNIT_AMOUNT };

    //모두 통과하면 넘어가기
    return { errorMessage: undefined };
  },

  //로또, 당첨 번호
  numbers(numbers, name) {
    if (!isNumberType(numbers))
      return { errorMessage: createErrorMessage.type(name) };
    if (
      numbers.length !== LOTTO.NUMBERS_COUNT ||
      [...new Set(numbers)].length !== LOTTO.NUMBERS_COUNT
    )
      return { errorMessage: createErrorMessage.length(name) };
    if (!isCorrectRange(numbers))
      return { errorMessage: createErrorMessage.range(name) };

    //모두 통과하면 넘어가기
    return { errorMessage: undefined };
  },

  //보너스번호
  bonusNumber(number, winningNumbers) {
    if (isNaN(number))
      return { errorMessage: createErrorMessage.type(BONUS_NUMBER) };
    if (winningNumbers.includes(number))
      return { errorMessage: ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER };
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER)
      return { errorMessage: createErrorMessage.range(BONUS_NUMBER) };

    //모두 통과하면 넘어가기
    return { errorMessage: undefined };
  },
};

export const createErrorMessage = {
  range: name => {
    return `[ERROR] ${name}은(는) ${LOTTO.MIN_NUMBER}~${LOTTO.MAX_NUMBER} 사이의 값만 입력할 수 있습니다.`;
  },
  type: name => {
    return `[ERROR] ${name}은(는) 숫자만 입력할 수 있습니다.`;
  },
  length: name => {
    return `[ERROR] ${name}은(는) 중복되지 않은 ${LOTTO.NUMBERS_COUNT}개의 숫자로 이루어져야 합니다.`;
  },
};

export const isNumberType = numbers => {
  return numbers.every(number => !isNaN(number));
};

export const isCorrectRange = numbers => {
  return numbers.every(
    number => number <= LOTTO.MAX_NUMBER && number >= LOTTO.MIN_NUMBER,
  );
};
