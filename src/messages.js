const INQUIRY = {
  CASH: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const OUTPUT = {
  BUY_LOTTO: ({ count }) => `${count}개를 구매했습니다.`,
  RESULT: '\n당첨 통계\n---',
  PROFIT: ({ profit }) => `총 수익률은 ${profit}%입니다.\n`,
};

const ERROR = {
  BONUS_NUMBER: {
    DUPLICATED: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.\n',
    NOT_INTEGER: '[ERROR] 보너스 번호는 정수여야 합니다.\n',
    OUT_OF_RANGE: '[ERROR] 보너스 번호는 1 ~ 45 사이 정수여야 합니다.\n',
  },
  CASH: {
    NOT_POSITIVE_INTEGER: '[ERROR] 입력은 양의 정수여야 합니다.\n',
    UNIT: '[ERROR] 입력은 1000원 단위여야 합니다.\n',
  },
  LOTTO: {
    COUNT: '[ERROR] 로또 번호는 6개여야 합니다.\n',
    NOT_INTEGER: '[ERROR] 로또 번호는 정수여야 합니다.\n',
    DUPLICATED: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.\n',
    OUT_OF_RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이 정수여야 합니다.\n',
  },
};

export { INQUIRY, OUTPUT, ERROR };
