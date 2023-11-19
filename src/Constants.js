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
    OUT_OF_RANGE: `[ERROR] 로또 번호는 1이상 45이하여야 합니다.`,
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
  BUY_TICKET: (input) => `${input}개를 구매했습니다.`,
  RESULT: (input) => `당첨 통계
  ---
  ${LOTTO.NUMBER_OF_MATCH.RANK_5}개 일치 (${LOTTO.EARNING.RANK_5.toLocaleString()}원) - ${
    input[4]
  }개
  ${LOTTO.NUMBER_OF_MATCH.RANK_4}개 일치 (${LOTTO.EARNING.RANK_4.toLocaleString()}원) - ${
    input[3]
  }개
  ${LOTTO.NUMBER_OF_MATCH.RANK_3}개 일치 (${LOTTO.EARNING.RANK_3.toLocaleString()}원) - ${
    input[2]
  }개
  ${
    LOTTO.NUMBER_OF_MATCH.RANK_2
  }개 일치, 보너스 볼 일치 (${LOTTO.EARNING.RANK_2.toLocaleString()}원) - ${input[1]}개
  ${LOTTO.NUMBER_OF_MATCH.RANK_1}개 일치 (${LOTTO.EARNING.RANK_1.toLocaleString()}원) - ${
    input[0]
  }개`,
  EARNING: (input) => `총 수익률은 ${input}%입니다.`,
};

const LOTTO = {
  NUMBER_RANGE: {
    FROM: 1,
    TO: 45,
    PICK: 6,
  },
  EARNING: {
    RANK_5: 5000,
    RANK_4: 50000,
    RANK_3: 1500000,
    RANK_2: 30000000,
    RANK_1: 2000000000,
  },
  PRICE: 1000,
  NUMBER_OF_MATCH: {
    RANK_5: 3,
    RANK_4: 4,
    RANK_3: 5,
    RANK_2: 5,
    RANK_1: 6,
  },
};

export { ERROR_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE, LOTTO };
