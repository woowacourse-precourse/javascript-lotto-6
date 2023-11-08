const ERROR_MEESAGE = Object.freeze({
  NOT_VALID_MONEY: '1000원 단위로 입력해 주세요',
  NOT_MINUS_NUMBER: '양의 정수를 입력해주세요',
  ISNAN_ERROR_MSG: '숫자만 입력해주세요',
  RANGE_ERROR_MSG: '1에서 45사이의 수만 입력해주세요',
  NOT_VALID_SIZE: '6개의 로또를 입력해주세요',
  NOT_DUPLICATE: '중복되지 않은 수를 입력해주세요',
});

const MONEY_UNIT = 1000;

const RANGE_START_NUM = 1;
const RANGE_END_NUM = 45;
const LOTTIO_SIZE = 6;

// prettier-ignore
export {
  ERROR_MEESAGE, MONEY_UNIT, RANGE_START_NUM, RANGE_END_NUM, LOTTIO_SIZE,
};
