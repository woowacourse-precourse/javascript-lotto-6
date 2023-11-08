import { LOTTO_COUNT, LOTTO_RANGE, LOTTO_PRICE } from './number.js';

export const ERROR_HEADER = '[ERROR]';

// 입력 에러
const NOT_COMMA_SEPARATED_NUMBERS = '숫자는 쉼표로 구분되어야 합니다.';
const NOT_DIVISIBLE_BY_LOTTO_PRICE = `${LOTTO_PRICE}원 단위로 입력해주세요.`;
const EMPTY_STRING = '입력값이 없습니다.';
const NOT_POSITIVE_INTEGER = '양의 정수를 입력해주세요.';

// 로또 에러
const NOT_IN_RANGE = `${LOTTO_RANGE.from} ~ ${LOTTO_RANGE.to} 사이의 숫자를 입력해주세요.`;
const DUPLICATED_NUMBER = '로또 번호는 중복될 수 없습니다.';
const NOT_IN_LOTTO_COUNT = `로또 번호는 ${LOTTO_COUNT}개여야 합니다.`;
const NOT_SORTED = '로또 번호는 정렬되어야 합니다.';

const ERROR_MESSAGE = Object.freeze({
  NOT_DIVISIBLE_BY_LOTTO_PRICE,
  EMPTY_STRING,
  NOT_POSITIVE_INTEGER,
  NOT_IN_RANGE,
  DUPLICATED_NUMBER,
  NOT_IN_LOTTO_COUNT,
  NOT_SORTED,
  NOT_COMMA_SEPARATED_NUMBERS,
});

export default ERROR_MESSAGE;
