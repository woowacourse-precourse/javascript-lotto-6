const INPUT_MESSAGES = Object.freeze({
  inputAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGES = Object.freeze({
  lottoTicketNumber: (number) => `\n${number}개를 구매했습니다. `,
  winningStatistics: '당첨 통계\n ---\n',
});

const ERROR_MESSAGES = Object.freeze({
  inputAmount: Object.freeze({
    type: '숫자를 입력해주세요.',
    min: '1000원 이상 금액을 입력해주세요.',
    max: '100,000원 이하 금액을 입력해주세요.',
    unit: '1000원 단위의 금액을 입력해주세요.',
  }),
  lottoNumber: '로또 번호는 6개여야 합니다.',
  winningNumbersAndBonusNumber: Object.freeze({
    duplicate: '중복되지 않는 정수를 입력해주세요.',
    min: '1 이상의 정수를 입력해주세요.',
    max: '45 이하의 정수를 입력해주세요.',
    winningNumbersLength: '6개의 정수를 입력해주세요.',
    winningNumbersType: '정수를 입력해주세요.',
    bonusNumberType: '1개의 정수를 입력해주세요.',
  }),
});

export { INPUT_MESSAGES, OUTPUT_MESSAGES, ERROR_MESSAGES };
