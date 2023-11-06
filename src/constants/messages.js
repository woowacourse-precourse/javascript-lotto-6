import { MAGIC_NUMBER } from './numbers.js';

export const INFO_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT_ASK_MESSAGE: '구입금액을 입력해 주세요.\n',
  PURCHASED_TICKETS_COUNT_MESSAGE: '개를 구매했습니다.',
  LOTTO_NUMBERS_ASK_MESSAGE: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER_ASK_MESSAGE: '\n보너스 번호를 입력해 주세요.\n',
});

export const STATS_MESSAGE = Object.freeze({
  WINNING_STATS_INFO: '\n당첨 통계\n---',
  FIFTH_RANK: '3개 일치 (5,000원)',
  FOURTH_RANK: '4개 일치 (50,000원)',
  THIRD_RANK: '5개 일치 (1,500,000원)',
  SECOND_RANK: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  FIRST_RANK: '6개 일치 (2,000,000,000원)',
});

export const ERROR_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT_ERROR: `[ERROR] ${MAGIC_NUMBER.TICKET_PRICE}원 단위 숫자로 입력해 주세요.`,
  LENGTH_NOT_SIX_ERROR: `[ERROR] 로또 번호는 쉼표로 구분되는 ${MAGIC_NUMBER.LOTTO_NUMBER_LENGTH}개의 숫자여야 합니다.`,
  INPUT_TYPE_ERROR: `[ERROR] 입력 형식이 옳바르지 않습니다. 숫자를 입력해 주세요.`,
  NUMBER_RANGE_ERROR: `[ERROR] 로또 번호는 각각 ${MAGIC_NUMBER.MIN_NUMBER}에서 ${MAGIC_NUMBER.MAX_NUMBER}까지의 숫자로 입력해주세요.`,
  DUPLICATE_ERROR: '[ERROR] 로또 번호가 중복되지 않도록 입력해 주세요',
});
