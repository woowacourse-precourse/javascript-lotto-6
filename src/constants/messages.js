export const ERROR_MSG = {
  INVALID_LOTTO: '[ERROR] 로또 번호 양식이 잘못되었습니다.',
  INVALID_MONEY: '[ERROR] 구입 금액 숫자 양식이 잘못되었습니다.',
  NOT_1000_UNITS: '[ERROR] 구입 금액은 1000원 단위여야 합니다.',
  INVALID_WINNER_NUMBERS: '[ERROR] 당첨 번호 숫자 양식이 잘못되었습니다.',
  INVALID_BONUS_NUMBER: '[ERROR] 보너스 번호 숫자 양식이 잘못되었습니다.',
  INVALID_WINNER_NUMBERS_COUNT: '[ERROR] 당첨 번호는 6개여야 합니다.',
  DUPLICATED_WINNER_NUMBER: '[ERROR] 당첨 번호는 서로 중복될 수 없습니다.',
  DUPLICATED_BONUS_NUMBER:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};

export const INPUT = {
  MONEY: '구입금액을 입력해 주세요.\n',
  WINNER_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT = {
  NEW_LINE: '',
  LOTTOS: '개를 구매했습니다.',
  RESULT: '당첨 통계\n---',
  RATE_OF_RETURNS: ['총 수익률은 ', '%입니다.'],
  PRIZE: {
    FIRST: ['6개 일치 (2,000,000,000원) - ', '개'],
    SECOND: ['5개 일치, 보너스 볼 일치 (30,000,000원) - ', '개'],
    THIRD: ['5개 일치 (1,500,000원) - ', '개'],
    FOURTH: ['4개 일치 (50,000원) - ', '개'],
    FIFTH: ['3개 일치 (5,000원) - ', '개'],
  },
};
