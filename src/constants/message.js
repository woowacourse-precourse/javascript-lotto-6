import deepFreeze from '../util/deepFreeze.js';
import { LOTTO_NUMBER, LOTTO_PRICE } from './constant.js';

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = deepFreeze({
  LOTTO_NUMBER_LENGTH: `${ERROR_PREFIX} 로또 번호는 ${LOTTO_NUMBER.LENGTH}개여야 합니다.`,
  NUMBER_OF_LOTTO_LIMIT: `${ERROR_PREFIX} 쉼표(,)를 기준으로 ${LOTTO_NUMBER.LENGTH}자리를 입력해주세요.`,
  CURRENCY_AMOUNT: `${ERROR_PREFIX} ${LOTTO_PRICE.CURRENCY_AMOUNT}원 단위로 입력해주세요`,
  MAXIMUM_LIMIT: `${ERROR_PREFIX} 금액이 너무 큽니다.`,
  MINIMUM_LIMIT: `${ERROR_PREFIX} ${LOTTO_PRICE.CURRENCY_AMOUNT}원 이상부터 구매가 가능합니다.`,
  NUMBER_TYPE: `${ERROR_PREFIX} 숫자 형태로 입력해주세요`,
  DUPLICATE: `${ERROR_PREFIX} 번호가 중복되면 안됩니다.`,
  LOTTO_NUMBER_RANGE: `${ERROR_PREFIX} ${LOTTO_NUMBER.MIN}~${LOTTO_NUMBER.MAX}의 숫자를 입력해주세요`,
});

export const INPUT_MESSAGE = deepFreeze({
  LOTTO_PRICE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUPUT_STATISTICS_MESSAGE = '\n당첨 통계\n---';
