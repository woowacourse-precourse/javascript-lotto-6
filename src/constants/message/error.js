import { LOTTO_NUMBER, LOTTO_PRICE } from '../setting.js';

export const ERROR_PREFIX = '[ERROR] ';

export const COMMON_ERROR = Object.freeze({
  number: '숫자만 입력 가능합니다.',
});

export const MONEY_ERROR = Object.freeze({
  purchaseAmount: `구입금액은 ${LOTTO_PRICE}원 이상만 가능합니다.`,
  amountExactness: `구입금액은 ${LOTTO_PRICE}원 단위로만 가능합니다.`,
});

export const LOTTO_ERROR = Object.freeze({
  count: `로또 번호는 ${LOTTO_NUMBER.count}개여야 합니다.`,
  duplication: '로또 번호는 중복될 수 없습니다.',
  range: `로또 번호는 ${LOTTO_NUMBER.min}이상 ${LOTTO_NUMBER.max}이하의 숫자로 구성되어야 합니다.`,
});
