const LOTTO_NUMBER = Object.freeze({
  inRangeFrom: 1,
  inRangeTo: 45,
  numberCount: 6,
  minPrice: 1000,
});

const PROMPT_MESSAGE = Object.freeze({
  promptPurchaseAmount: '구입금액을 입력해 주세요.',
  promptWinningNumbers: `\n당첨 번호를 입력해 주세요.`,
  promptBonusNumber: `\n보너스 번호를 입력해 주세요.`,
});

const ERROR_MESSAGE = Object.freeze({
  errorText: '[ERROR]',
  invalidPusrchaseAmount: '1000원 단위로 구입 금액을 입력해주세요.',
  duplicationWinningNumbers: '1부터 45 사이의 6개 중복되지 않는 자연수이어야 합니다.',
  duplicationBonusNumber: '당첨 번호와 중복되지 않는1부터 45 사이의 보너스 번호를 입력해주세요.',
});

const OUTPUT_MESSAGE = Object.freeze({
  statisticsMessage: `\n당첨 통계\n---`,
});

export { PROMPT_MESSAGE, ERROR_MESSAGE, LOTTO_NUMBER, OUTPUT_MESSAGE };
