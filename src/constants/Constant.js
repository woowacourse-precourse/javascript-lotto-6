export const CONSTANT = Object.freeze({
  digit: 6,
  amountUnit: 1000,
});

export const SYMBOL = Object.freeze({
  comma: ',',
});

export const LOTTO_NUMBER = Object.freeze({
  minNum: 1,
  maxNum: 45,
  count: 6,
});

export const RANK = Object.freeze({
  first: { match: 6, reward: 2000000000 },
  bonus: { match: -1, reward: 30000000 },
  second: { match: 5, reward: 1500000 },
  third: { match: 4, reward: 50000 },
  fourth: { match: 3, reward: 5000 },
});

export const MESSAGE = Object.freeze({
  enterAmount: '구입금액을 입력해 주세요.\n',
  buyLotto: '개를 구매했습니다.',
  enterWinning: '당첨 번호를 입력해 주세요.\n',
  enterBonus: '보너스 번호를 입력해 주세요\n',
  winningStatistics: '당첨 통계\n---',
});

export const ERROR = Object.freeze({
  errorPrefix: '[ERROR]',
  isNotNumber: '입력값이 숫자가 아닙니다. 숫자만 입력할 수 있습니다.',
  isNotInAmountUnit: `입력된 금액이 ${CONSTANT.amountUnit}원 단위가 아닙니다.`,
  isNegative: '입력값이 양수가 아닙니다. 입력값은 양수여야 합니다.',
  hasNonNumericElements: '로또 번호 중 숫자가 아닌 요소가 있습니다. 로또 번호는 숫자만 가능합니다.',
  hasDuplicate: '로또 번호 중 중복된 숫자가 있습니다. 로또 번호는 모두 다른 수여야 합니다.',
  isInvalidCount: `${LOTTO_NUMBER.count}개가 입력되지 않았습니다. ${LOTTO_NUMBER.count}개의 숫자를 입력해주세요.`,
  hasOutOfRange: `입력된 숫자 중 ${LOTTO_NUMBER.minNum}-${LOTTO_NUMBER.maxNum} 범위가 아닌 숫자가 있습니다. 범위 안의 숫자를 입력해주세요`,
  isOutOfRange: `입력된 숫자가 ${LOTTO_NUMBER.minNum}-${LOTTO_NUMBER.maxNum} 범위가 아닙니다. 범위 안의 숫자를 입력해주세요`,
});
