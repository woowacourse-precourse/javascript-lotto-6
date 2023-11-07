export const EXCEPTION = Object.freeze({
  LOTTO_MUST_SIX_NUMBERS: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_MUST_IN_RANGE: '[ERROR] 로또 번호는 1부터 45까지의 정수입니다.',
  LOTTO_DUPLICATE: '[ERROR] 로또 번호에 중복된 숫자가 있으면 안된다.',
  BONUS_DUPLICATE: '[ERROR] 보너스 번호는 로또 번호와 중복될 수 없다',
  MONEY_DIVIDE_ERROR: '[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 한다.',
});

export const LOTTO = Object.freeze({
  START: 1,
  END: 45,
  LENGTH: 6,
  PRICE: 1_000,
});

export const MONEY = Object.freeze({
  THREE: 5_000,
  FOUR: 50_000,
  FIVE: 1_500_000,
  BONUS: 30_000_000,
  SIX: 2_000_000_000,
  DEFAULT_COUNT: 0,
});

export const MATCHING = Object.freeze({
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  BONUS: '5+1',
  SIX: '6',
});

export const OUTPUT = Object.freeze({
  WINNING_RESULT: '\n당첨 통계',
  BAR: '---',
});

export const INPUT = Object.freeze({
  MONEY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBERS: '\n보너스 번호를 입력해 주세요.\n',
});
