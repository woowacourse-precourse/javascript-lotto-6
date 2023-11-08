export const MESSAGE = {
  INPUT_MONEY: "구입금액을 입력해 주세요.\n",
  INPUT_USER_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_USER_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  PRINT_ISSUE_LOTTOS: "\n%s개를 구매했습니다.",
  PRINT_RESULT_TITLE: "당첨 통계\n---",
  PRINT_RESULT_RANK: "%s개 일치%s (%s원) - %s개",
  PRINT_RATE: "총 수익률은 %s%입니다.",
};

export const ERROR = {
  NOT_NUMBER: "[ERROR] 숫자가 잘못된 형식입니다.",
  NOT_UNIT_OF_PRICE: "[ERROR] 구입 금액은 1000원 단위만 입력 가능합니다.",
  NOT_VALID_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  NOT_RANGE_OF_NUMBER: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUPLICATE_NUMBER: "[ERROR] 중복된 값이 존재합니다.",
  NOT_FORMAT_OF_USER_NUMBER: "[ERROR] 번호를 쉼표로 구분하여 입력해야 합니다.",
  EXIST_IN_USER_NUMBER: "[ERROR] 보너스 번호는 입력 번호와 중복되지 않아야 합니다.",
};

export const RANK = {
  FIRST: {
    NAME: 'FIRST',
    MATCHING_COUNT: 6,
    EXTRA_TEXT: '',
    PRIZE: 2000000000,
  },
  SECOND: {
    NAME: 'SECOND',
    MATCHING_COUNT: 5,
    EXTRA_TEXT: ', 보너스 볼 일치',
    PRIZE: 30000000,
  },
  THIRD: {
    NAME: 'THIRD',
    MATCHING_COUNT: 5,
    EXTRA_TEXT: '',
    PRIZE: 1500000,
  },
  FOURTH: {
    NAME: 'FOURTH',
    MATCHING_COUNT: 4,
    EXTRA_TEXT: '',
    PRIZE: 50000,
  },
  FIFTH: {
    NAME: 'FIFTH',
    MATCHING_COUNT: 3,
    EXTRA_TEXT: '',
    PRIZE: 5000,
  },
};