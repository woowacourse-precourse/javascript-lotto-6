import { LOTTO } from './lotto.js';

export const REQUEST_MESSAGE = {
  PURCHASE_PRISE: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const ERROR_MESSAGE = {
  INVALID_RESPONSE: '예기치 못한 입력이 들어왔습니다.',
  HAVE_OVER_RANGE_NUMBERS: '입력받은 범위 밖의 숫자가 생성되었습니다.',
  HAVE_NOT_NUMBER_TYPE:
    'Random하게 생성된 숫자중에 number 형식이 아닌 값이 있습니다.',
  INVALID_SELLING_PRISE: `최소 구매 금액은 ${LOTTO.SELLING_PRISE}입니다.`,
  RECEIVE_LESS_THAN_MINIMUM_PURCHASE_PRISE: `최소 구매 금액은 ${LOTTO.SELLING_PRISE}입니다.`,
  INVALID_PURCHASE_PRISE_CURRENCY: `${LOTTO.SELLING_PRISE}원 단위로 입력해주세요 !`,
};
