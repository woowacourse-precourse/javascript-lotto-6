import {
  LIMIT_PER_DAY_PURCHASABLE_COUNT,
  LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE,
  LOTTO,
} from './lotto.js';

export const REQUEST_MESSAGE = {
  PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

export const ERROR_MESSAGE = {
  HAVE_NOT_LOTTO_INSTANCE: 'Lotto 인스턴스가 아닌 값이 있습니다.',
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
    PURCHASE_PRICE: {
      HAVE_START_NUMBER_ZERO:
        '구매 금액에 0으로 시작하는 숫자는 입력할 수 없습니다.',
    },
    IS_OVER_PURCHASABLE_PRICE_OF_PER_DAY: `1일 최대 구매 금액은 ${LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE}이며 총 ${LIMIT_PER_DAY_PURCHASABLE_COUNT}장 입니다.`,
    HAVE_NOT_NUMBER_TYPE: '(,)로 분리된 값은 숫자만 입력해주세요.',
    EXIST_OVER_RANGE_NUMBER: `당첨 숫자의 범위는 ${LOTTO.NUMBER_RANGE.MIN}~${LOTTO.NUMBER_RANGE.MAX} 사이의 숫자만 가능합니다.`,
    INVALID_WINNING_NUMBERS_COUNT: `당첨 번호는 ${LOTTO.NUMBER_COUNT}개여야 합니다.`,
    HAVE_INVALID_INPUT_WITHOUT_NUMBER_AND_COMMA:
      '(,)를 기준으로 양의 정수(과학적 기수법 금지)만 입력해주세요 ex) 1,2,3,4,5,6',
    HAVE_DUPLICATED_NUMBER: '중복된 되지 않은 숫자만 입력해주세요.',
    HAVE_NOT_INTEGER_NUMBER:
      '소수점이 없는 정수만 입력해주세요. ex) 1,2,3,4,5,6',
    EXIST_NEGATIVE_SIGN:
      '음수가 들어있습니다. 양의 정수만 입력해주세요. ex) 1,2,3,4,5,6',
    EXIST_BETWEEN_COMMA_EMPTY_STRING:
      '콤마 사이에 반드시 숫자를 넣어주세요. ex) 1,2,3,4,5,6',
    HAVE_START_NUMBER_ZERO:
      '당첨숫자에 0으로 시작하는 숫자는 입력할 수 없습니다.',
    BONUS_NUMBER: {
      HAVE_SPACING: '보너스 번호 사이에 공백을 넣지 말아주세요.',
      EXIST_OVER_RANGE: `보너스 번호의 범위는 ${LOTTO.NUMBER_RANGE.MIN}~${LOTTO.NUMBER_RANGE.MAX} 사이의 숫자만 가능합니다.`,
      DUPLICATED_WINNING_NUMBERS: '당첨 번호와 보너스 번호가 중복됩니다.',
      EXIST_NEGATIVE_SIGN: `음수가 들어있습니다. 양의 정수만 입력해주세요. ex) ${LOTTO.NUMBER_RANGE.MAX}`,
      HAVE_START_NUMBER_ZERO:
        '보너스 숫자에 0으로 시작하는 숫자는 입력할 수 없습니다.',
      HAVE_DECIMAL_NUMBER: '소수점은 입력이 불가합니다. 정수만 입력해주세요.',
      HAVE_INVALID_INPUT_WITHOUT_NUMBER_TYPE: `양의 정수(과학적 기수법 금지)만 입력해주세요 ex) ${LOTTO.NUMBER_RANGE.MIN}`,
    },
  },
};
