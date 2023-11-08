export const MESSAGE = {
  PURCHASED: '개를 구매했습니다.',
  WINNING_STATISTICS: '당첨통계\n---\n',
  MATCH: '개 일치 (',
  BONUS_MATCH: '개 일치, 보너스 볼 일치 (',
  WON: '원) - ',
  PIECES: '개\n',
  TOTAL_PROFIT_RATE: '총 수익률은 ',
  PERCENT: '%입니다.',
};

export const PROMPT_MESSAGE = {
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  INPUT_WINNING_NUMBER: '로또 당첨 번호를 입력해주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해주세요',
};

export const ERROR_MESSAGE = {
  NOT_A_NUMBER: '[ERROR] 구입금액은 숫자로 입력해야 합니다.',
  NOT_DIVISIBLE: '[ERROR] 로또는 1,000원 단위로 구매 가능합니다.',
  LESS_LOTTO_NUMBERS: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NUMBER_HAVE_DUPLICATE: '[ERROR] 중복된 당첨 번호가 있습니다.',
  MUST_BE_NUMBER: '[ERROR] 로또 번호는 숫자여야 합니다.',
  INVALID_LOTTO_NUMBER_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_BONUS_NUMBER: '[ERROR] 보너스 번호는 당첨 번호에 포함되지 않은 수여야 합니다.',
};

export const PRICE = {
  LOTTO: 1000,
};

export const LOTTO_PRIZE_AMOUNT = {
  FIRST_PLACE: 2000000000,
  SECOND_PLACE: 30000000,
  THIRD_PLACE: 1500000,
  FOURTY_PLACE: 50000,
  LAST_PLACE: 5000,
};

export const MATCH_COUNT = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
};
