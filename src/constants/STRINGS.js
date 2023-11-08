const STRINGS = Object.freeze({
  PAY_INPUT: '구입금액을 입력해 주세요.\n',
  PAY_RESULT: (quantity) => `\n${quantity}개를 구매했습니다.`,
  ANSWER_NUMBERS: '당첨 번호를 입력해 주세요. \n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요. \n',
  RESULT_TITLE: '당첨 통계\n---',
  RESULT_THREE_CORRECT: (match) => `3개 일치 (5,000원) - ${match}개`,
  RESULT_FOUR_CORRECT: (match) => `4개 일치 (50,000원) - ${match}개`,
  RESULT_FIVE_CORRECT: (match) => `5개 일치 (1,500,000원) - ${match}개`,
  RESULT_FIVE_BONUS_CORRECT: (match) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${match}개`,
  RESULT_SIX_CORRECT: (match) => `6개 일치 (2,000,000,000원) - ${match}개`,
  RATE_OF_RETURN: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.\n`,

  ERROR_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  ERROR_COMMA: '[ERROR] 당첨 번호는 쉼표(,)로 구분해야 합니다.',
  ERROR_UNIT: '[ERROR] 구입 금액은 1,000원 단위만 가능합니다.',
  ERROR_NAN: '[ERROR] 숫자만 입력 가능합니다.',
  ERROR_RANGE: '[ERROR] 1부터 45까지의 숫자만 입력 가능합니다.',
  ERROR_REPEATED: '[ERROR] 각 로또에서 번호는 중복 입력 불가합니다.',
});

export default STRINGS;
