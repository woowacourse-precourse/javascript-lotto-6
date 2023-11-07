const ERROR_MESSAGE = {
  PRICE_INPUT: {
    NOTHING: '[ERROR] 금액을 입력하세요.',
    NOT_A_NUMBER: '[ERROR] 금액은 숫자만 입력하세요.',
    WRONG_UNIT: '[ERROR] 금액을 1000원 단위로 입력하세요.',
  },
  LOTTO_NUMBERS: {
    NOTHING: '[ERROR] 로또 번호를 입력하세요.',
    NOT_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
    NOT_A_NUMBER: '[ERROR] 로또 번호는 숫자만 입력하세요.',
    SAME_NUMBER: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  },
  BONUS_NUMBER: {
    NOTHING: '[ERROR] 보너스 번호를 입력하세요.',
    NOT_A_NUMBER: '[ERROR] 보너스 번호는 숫자만 입력하세요.',
  },
};

const INPUT_MESSAGE = {
  PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
  LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

const OUTPUT_MESSAGE = {
  BUY_TICKET: (amountOfTickets) => `${amountOfTickets}개를 구매했습니다.`,
  RESULT: (rankCounts) => `당첨 통계\n
  ---\n
  3개 일치 (5,000원) - ${rankCounts[4]}개\n
  4개 일치 (50,000원) - ${rankCounts[3]}개\n
  5개 일치 (1,500,000원) - ${rankCounts[2]}개\n
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts[1]}개\n
  6개 일치 (2,000,000,000원) - ${rankCounts[0]}개`,
  EARNING: (earningRate) => `총 수익률은 ${earningRate}%입니다.`,
};

export { ERROR_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE };
