const inputMessage = {
  PURCHASE_MESSAGE: '구입금액을 입력해 주세요.\n',
  LOTTO_MESSAGE: '당첨 번호를 입력해 주세요.\n',
  BONUS_MESSAGE: '보너스 번호를 입력해 주세요.\n',
  LOTTO_STATISTIC: '\n당첨 통계\n---',
  ENTER: '\n',
};

const winningMessage = {
  FIFTH: '3개 일치 (5,000원) -',
  FORTH: '4개 일치 (50,000원) -',
  THIRD: '5개 일치 (1,500,000원) -',
  SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원) -',
  FIRST: '6개 일치 (2,000,000,000원) -',
};

const errorMessage = {
  INVALID_INTEGER:
    '[ERROR] 1,000원으로 나누어 떨어지는 양의 정수를 입력해야 합니다.',
  INVALID_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  HAS_DUPLICATES: '[ERROR] 중복된 값이 존재합니다.',
  INVALID_RANGE: '[ERROR] 1과 45 사이의 정수를 입력해야 합니다.',
  BONUS_DUPLICATES: '[ERROR] 보너스 번호는 로또 번호와 겹치지 않아야 합니다.',
};

export { inputMessage, winningMessage, errorMessage };
