export const ERROR_HEADER = '[ERROR]';

const LESS_THAN_MINIMUM = '1000원 이상의 금액을 입력해주세요.';
const NOT_DIVISIBLE_BY_1000 = '1000원 단위로 입력해주세요.';
const NOT_INTEGER = '정수를 입력해주세요.';
const EMPTY_STRING = '입력값이 없습니다.';
const NOT_POSITIVE_INTEGER = '양의 정수를 입력해주세요.';
const NOT_IN_RANGE = '1 ~ 45 사이의 숫자를 입력해주세요.';
const DUPLICATED_NUMBER = '중복된 숫자를 입력할 수 없습니다.';

const ERROR_MESSAGE = Object.freeze({
  LESS_THAN_MINIMUM,
  NOT_DIVISIBLE_BY_1000,
  NOT_INTEGER,
  EMPTY_STRING,
  NOT_POSITIVE_INTEGER,
  NOT_IN_RANGE,
  DUPLICATED_NUMBER,
});

export default ERROR_MESSAGE;
