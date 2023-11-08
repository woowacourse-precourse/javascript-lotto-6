const MESSAGE = Object.freeze({
  START: '구입금액을 입력해 주세요.\n',
  WINNING_INPUT: '당첨 번호를 입력해 주세요.\n',
  BONUS_INPUT: '보너스 번호를 입력해 주세요.\n',
  CALC: '당첨 통계\n---',
});

const MESSAGE_INPUT = (num) => Object.freeze({
  COUNT: `${num}개를 구매했습니다.`,
  RANK_THREE: `3개 일치 (5,000원) - ${num}개`,
  RANK_FOUR: `4개 일치 (50,000원) - ${num}개`,
  RANK_FIVE: `5개 일치 (1,500,000원) - ${num}개`,
  RANK_BONUS: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개`,
  RANK_SIX: `6개 일치 (2,000,000,000원) - ${num}개`,
  RATE: `총 수익률은 ${num}%입니다.`
});

const ERROR_MESSAGE = Object.freeze({
  INPUT_USERMONEY_ERROR: '[ERROR] 올바른 숫자를 입력해 주세요.',
  NUM_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INPUT_ERROR: '[ERROR] 로또 번호는 6개여야 합니다.',
  // INPUT_NUM_ERROR: '[ERROR] 6개의 로또 번호를 입력해 주세요.',
  INPUT_TYPE_ERROR: '[ERROR] 숫자만 입력해 주세요.',
  INPUT_DUPLICATE_ERROR: '[ERROR] 중복 없는 6개의 로또 번호를 입력해 주세요.',
  INPUT_INCLUDES_ERROR: '[ERROR] 당첨 로또 번호에 포함되지 않는 번호를 입력해 주세요.',
  INVALID_ERROR: '[ERROR] 유효하지 않은 값입니다.',
})

const PRIZE = Object.freeze({
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  BONUS: 30000000,
  SIX: 2000000000,
})

export { MESSAGE, MESSAGE_INPUT, ERROR_MESSAGE, PRIZE };