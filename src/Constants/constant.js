export const MESSAGE = Object.freeze({
  GET_MONEY: '구입금액을 입력해 주세요.\n',
  BUY_LOTTO: '개를 구매했습니다.',
  GET_LOTTO_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  GET_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '\n당첨 통계',
  FIFTH: '3개 일치 (5,000원)',
  FOURTH: '4개 일치 (50,000원)',
  THIRD: '5개 일치 (1,500,000원)',
  SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  FIRST: '6개 일치 (2,000,000,000원)',
  ERROR: {
    LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
    RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    DUPLICATE: '[ERROR] 로또 번호는 중복되면 안됩니다.',
    MONEY: '[ERROR] 금액은 1000원으로 나누어 떨어져야 합니다.',
    BONUS: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
});
