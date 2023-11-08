import NUMBER from './Number';

const ERROR_SYMBOL = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER: `${ERROR_SYMBOL} 숫자만 입력해주세요. \n`,
  INVALID_INTEGER: `${ERROR_SYMBOL} 정수를 입력해주세요. \n`,
  INVALID_POSITIVE: `${ERROR_SYMBOL} 0보다 큰 수를 입력해주세요. \n`,
  INVALID_PURCHASE_UNIT: `${ERROR_SYMBOL} ${NUMBER.PURCHASE_AMOUNT_UNIT}원 단위로 입력해주세요. \n`,
  INVALID_RANGE: `${ERROR_SYMBOL} ${NUMBER.MIN_IN_RANGE}~${NUMBER.MAX_IN_RANGE} 사이의 숫자를 입력해주세요. \n`,
  INVALID_NUMBER_OF_WINNING_NUMBERS: `${ERROR_SYMBOL} ${NUMBER.LOTTO_NUMBER_OF_NUMBERS}개의 숫자를 입력해주세요. \n`,
  INVALID_DUPLICATE_WINNING_NUMBERS: `${ERROR_SYMBOL} 숫자가 중복되지 않게 입력해주세요. \n`,
  INVALID_DUPLICATE_BONUS_NUMBER: `${ERROR_SYMBOL} 당첨 번호와 중복되지 않는 값을 입력해주세요. \n`,
});

export default ERROR_MESSAGE;
