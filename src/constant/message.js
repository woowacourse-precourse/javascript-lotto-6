export const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT_NUMBER: '[ERROR] 숫자만 입력해주세요.',
  INVALID_NON_DIVISIBLE: '[ERROR] 금액은 1000원 단위여야 합니다.',
  INVALID_LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_UNIQUE: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  INVALID_LOTTO_BONUS:
    '[ERROR] 보너스 번호는 로또 번호와 중복되지 않아야 합니다.',
  INVALID_LOTTO_RANGE: '[ERROR] 로또 번호는 1~45 사이여야 합니다.',
  INVALID_EMPTY_INPUT: '[ERROR] 입력 값을 넣어주세요.',
});

export const INPUT_MESSAGE = Object.freeze({
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_WINNER_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  OUTPUT_BUY_LOTTERY: (totalTicket) => {
    return `\n${totalTicket}개를 구매했습니다.`;
  },
  OUTPUT_RESULT: '\n당첨 통계',
  OUTPUT_DIVIDER: '---',
  OUTPUT_THREE_MATCH: '3개 일치 (5,000원)',
  OUTPUT_FOUR_MATCH: '4개 일치 (50,000원)',
  OUTPUT_FIVE_MATCH: '5개 일치 (1,500,000원)',
  OUTPUT_FIVE_AND_BONUS_MATCH: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  OUTPUT_SIX_MATCH: '6개 일치 (2,000,000,000원)',
  OUTPUT_MATCH_AMOUNT: (matchNum) => `${matchNum}개`,
  OUTPUT_TOTAL_BENEFIT: (percetage) => `총 수익률은 ${percetage}%입니다.`,
});
