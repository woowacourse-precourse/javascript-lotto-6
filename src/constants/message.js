import {
  LIMIT_PER_DAY_PURCHASABLE_COUNT,
  LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE,
  LOTTO,
} from './lotto.js';

export const REQUEST_MESSAGE = {
  PURCHASE_PRICE: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const ERROR_MESSAGE = {
  INVALID_RESPONSE: '예기치 못한 입력이 들어왔습니다.',
  HAVE_OVER_RANGE_NUMBERS: '입력받은 범위 밖의 숫자가 생성되었습니다.',
  HAVE_NOT_NUMBER_TYPE:
    'Random하게 생성된 숫자중에 number 형식이 아닌 값이 있습니다.',
  INVALID_SELLING_PRICE: `최소 구매 금액은 ${LOTTO.SELLING_PRICE}입니다.`,
  RECEIVE_LESS_THAN_MINIMUM_PURCHASE_PRICE: `최소 구매 금액은 ${LOTTO.SELLING_PRICE}입니다.`,
  INVALID_PURCHASE_PRICE_CURRENCY: `${LOTTO.SELLING_PRICE}원 단위로 입력해주세요 !`,
  INVALID_NUMBERS_COUNT: '로또 번호는 6개여야 합니다.',
  EXIST_DUPLICATE_NUMBER: '발행된 로또번호에 중복이 있습니다.',
  EXIST_OVER_RANGE_NUMBER: `발행 가능한 번호의 범위 외의 값이 있습니다. (로또 번호 범위 : ${LOTTO.NUMBER_RANGE.MIN}~${LOTTO.NUMBER_RANGE.MAX})`,
  EXIST_NOT_NUMBER_TYPE: '숫자형이 아닌 값이 있습니다.',
  USER_INPUT: {
    IS_NOT_ONLY_NUMBER_TYPE: '숫자만 입력해주세요',
    LOWER_THAN_MINIMUM_PURCHASE_PRICE: `최소 주문 금액은 ${LOTTO.SELLING_PRICE}입니다.`,
    HAVE_MINUS_SIGN: `양의 정수 ${LOTTO.SELLING_PRICE}단위로 입력해주세요.`,
    IS_NOT_MULTIPLE_SELLING_PRICE: `죄송합니다. 돌려드릴 잔돈이 없어서 ${LOTTO.SELLING_PRICE} 단위로 입력해주세요.`,
    HAVE_SPACING: '구매금액 사이에 공백을 넣지 말아주세요.',
    IS_OVER_PURCHASABLE_PRICE_OF_PER_DAY: `1일 최대 구매 금액은 ${LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE}이며 총 ${LIMIT_PER_DAY_PURCHASABLE_COUNT}장 입니다.`,
  },
};
