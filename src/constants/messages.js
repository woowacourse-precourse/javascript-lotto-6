const INPUT_MESSAGES = Object.freeze({
  inputAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGES = Object.freeze({
  lottoTicketNumber: (number) => `\n${number}개를 구매했습니다.`,
  result: (rank) => [
    '\n당첨 통계\n---',
    `3개 일치 (5,000원) - ${rank.get(3)}개`,
    `4개 일치 (50,000원) - ${rank.get(4)}개`,
    `5개 일치 (1,500,000원) - ${rank.get(5)}개`,
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank.get(5.5)}개`,
    `6개 일치 (2,000,000,000원) - ${rank.get(6)}개`,
  ],
  rate: (rate) => `총 수익률은 ${rate}%입니다.`,
});

const ERROR_MESSAGES = Object.freeze({
  inputAmount: Object.freeze({
    type: `숫자를 입력해주세요.`,
    min: `1000원 이상 금액을 입력해주세요.`,
    max: `100,000원 이하 금액을 입력해주세요.`,
    unit: `1000원 단위의 금액을 입력해주세요.`,
  }),
  lottoNumberLength: `로또 번호는 6개여야 합니다.`,
  lottoNumberDuplicate: `로또 번호는 중복되지 않은 수여야 합니다.`,
  winningNumbersAndBonusNumber: Object.freeze({
    duplicate: `중복되지 않는 정수를 입력해주세요.`,
    min: `1 이상의 정수를 입력해주세요.`,
    max: `45 이하의 정수를 입력해주세요.`,
    winningNumbersLength: `6개의 정수를 입력해주세요.`,
    winningNumbersType: `정수를 입력해주세요.`,
    bonusNumberType: `1개의 정수를 입력해주세요.`,
  }),
});

export { INPUT_MESSAGES, OUTPUT_MESSAGES, ERROR_MESSAGES };
