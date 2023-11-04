const INPUT_MESSAGES = Object.freeze({
  inputAmount: '구입금액을 입력해 주세요.\n',
});

const ERROR_MESSAGES = Object.freeze({
  inputAmount: Object.freeze({
    type: '숫자를 입력해주세요.',
    low: '1000원 이상 금액을 입력해주세요.',
    high: '100,000원 이하 금액을 입력해주세요.',
    unit: '1000원 단위의 금액을 입력해주세요.',
  }),
});

export { INPUT_MESSAGES, ERROR_MESSAGES };
