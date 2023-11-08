export const NORMAR_MSG = {
  AMOUNT_INPUT: '구입금액을 입력해 주세요.\n',
  WINNING_INPUT: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_INPUT: '\n보너스 번호를 입력해 주세요.\n',
}

export const ERROR_MSG = {
  AMOUNT_FORMAT_ERROR: '구입 금액은 0으로 시작하지 않는 숫자 형식입니다.',
  AMOUNT_UNIT_ERROR: '구입 금액은 1000원 단위로 입력해야 합니다.',
  WINNING_FORMAT_ERROR: '당첨 번호는 \,으로 구분되는 6개의 숫자 형식입니다.',
  WINNING_COUNT_ERROR: '당첨 번호는 여섯 개를 입력해야 합니다.',
  WINNING_DUPLICATE_ERROR: '당첨 번호 여섯 개에는 중복이 없어야 합니다.',
  BONUS_FORMAT_ERROR: '보너스 번호는 하나의 숫자 형식입니다.',
  BONUS_NOT_IN_WINNING_ERROR: '보너스 번호는 당첨 번호에 없는 숫자를 입력해야 합니다.',
  LOTTO_FORMAT_ERROR: '로또 번호는 1부터 45 사이의 숫자 형식이어야 합니다.',
}

export const WINNING_RESULT = {
  RESULT_MSG: '\n당첨 통계\n---',
  THREE_HIT: '3개 일치 (5,000원)',
  FOUR_HIT: '4개 일치 (50,000원)',
  FIVE_HIT: '5개 일치 (1,500,000원)',
  FIVE_HIT_AND_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  SIX_HIT: '6개 일치 (2,000,000,000원)',
}

export const WINNING_MONEY = {
  THREE_HIT_MONEY: 5000,
  FOUR_HIT_MONEY: 50000,
  FIVE_HIT_MONEY: 1500000,
  FIVE_HIT_AND_BONUS_MONEY: 30000000,
  SIX_HIT_MONEY: 2000000000
}