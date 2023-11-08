const MESSAGE = {
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n'
};

const ERROR = {
  INVALID_MONEY: '[ERROR] 금액은 숫자로 입력해 주세요.',
  INVALID_UNIT: '[ERROR] 금액은 1,000원 단위여야 합니다.',
  INVALID_ARRAY: '[ERROR] 쉼표(,)로 구분하여 작성해 주세요.',
  INVALID_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_NUMBER: '[ERROR] 숫자만 입력해 주세요.',
  INVALID_LOTTO_RANGE: '[ERROR] 1 ~ 45 사이의 숫자를 입력해 주세요.',
  LOTTO_DUPLICATION: '[ERROR] 중복되지 않는 숫자를 입력해주세요.',
  DIFFERENT_NUMBER: '[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해주세요.'
};

const RESULT = {
  PURCHASE: '개를 구매했습니다.',
  COUNT: '개',
  STATISTIC: '\n당첨 통계 \n--- \n',
  FIRST_PLACE: '6개 일치 (2,000,000,000원) - ',
  SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  THIRD_PLACE: '5개 일치 (1,500,000원) - ',
  FOURTH_PLACE: '4개 일치 (50,000원) - ',
  FIFTH_PLACE: '3개 일치 (5,000원) - ',
  RATE_OF_RETURN: '총 수익률은 ',
  PERCENT: '%입니다.\n'
}
export { ERROR, MESSAGE, RESULT };