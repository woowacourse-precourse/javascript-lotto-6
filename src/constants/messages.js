const INPUT_MESSAGES = Object.freeze({
  inputAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  winningStatistics: '당첨 통계\n ---\n',
});

const OUTPUT_MESSAGES = Object.freeze({
  lottoTicketNumber: (number) => `\n${number}개를 구매했습니다. `,
});

const ERROR_MESSAGES = Object.freeze({
  inputAmount: Object.freeze({
    type: '숫자를 입력해주세요.',
    low: '1000원 이상 금액을 입력해주세요.',
    high: '100,000원 이하 금액을 입력해주세요.',
    unit: '1000원 단위의 금액을 입력해주세요.',
  }),
  lottoNumber: '로또 번호는 6개여야 합니다.',
});

export { INPUT_MESSAGES, OUTPUT_MESSAGES, ERROR_MESSAGES };
