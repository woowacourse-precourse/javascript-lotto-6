const ERROR_SYMBOL = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER: `${ERROR_SYMBOL} 숫자만 입력해주세요. \n`,
  INVALID_PURCHASE_UNIT: `${ERROR_SYMBOL} 1000원 단위로 입력해주세요. \n`,
  INVALID_RANGE: `${ERROR_SYMBOL} 1~45 사이의 숫자를 입력해주세요. \n`,
  INVALID_NUMBER_OF_WINNING_NUMBER: `${ERROR_SYMBOL} 6개의 숫자를 입력해주세요. \n`,
  INVALID_DUPLICATE_WINNING_NUMBER: `${ERROR_SYMBOL} 숫자가 겹치지 않게 입력해주세요. \n`,
  INVALID_DUPLICATE_BONUS_NUMBER: `${ERROR_SYMBOL} 당첨 번호와 겹치지 않는 값을 입력해주세요. \n`,
});

export default ERROR_MESSAGE;
