export const DECIMAL_DIGIT_REGEX = /^[0-9]$/;

export const LOTTO_REGEX = Object.freeze({
  bonusNumberInput: /^([1-9]|[1-3][0-9]|4[0-5])$/,
  lottoNumberInput:
    /^([1-9]|[1-3][0-9]|4[0-5])(,([1-9]|[1-3][0-9]|4[0-5])){5}$/,
});

export const LOTTO_CONSTANT = Object.freeze({
  minInclusive: 1,
  maxInclusive: 45,
  minPrice: 1000,
  numberCount: 6,
  roundingDigit: 1,
  percentageFactor: 100,
  reverseRankList: ['fifth', 'fourth', 'third', 'second', 'first'],
});

export const LIMIT_CONSTANT = Object.freeze({
  minLimit: 1,
  lengthMaxLimit: 16,
  numberMaxLimit: 9000000000000000,
});

export const LOTTO_RANK = Object.freeze({
  first: {
    rank: 'first',
    reward: 2000000000,
    matchedNumber: 6,
    bonudNumberText: '',
    rewardText: '2,000,000,000원',
  },
  second: {
    rank: 'second',
    reward: 30000000,
    matchedNumber: 5,
    bonudNumberText: ', 보너스 볼 일치',
    rewardText: '30,000,000원',
  },
  third: {
    rank: 'third',
    reward: 1500000,
    matchedNumber: 5,
    bonudNumberText: '',
    rewardText: '1,500,000원',
  },
  fourth: {
    rank: 'fourth',
    reward: 50000,
    matchedNumber: 4,
    bonudNumberText: '',
    rewardText: '50,000원',
  },
  fifth: {
    rank: 'fifth',
    reward: 5000,
    matchedNumber: 3,
    bonudNumberText: '',
    rewardText: '5,000원',
  },
});

export const FORMATTER = Object.freeze({
  publishCountFormatter(publishCount) {
    return `\n${publishCount}개를 구매했습니다.`;
  },

  lottoPrintFormatter(lottoList) {
    const elements = lottoList.join(', ');
    return `[${elements}]`;
  },
  returnRateFormatter(returnRate) {
    return `총 수익률은 ${returnRate}%입니다.`;
  },
  resultsPrintFormatter(matchedNumber, bonudNumberText, reward, count) {
    return `${matchedNumber}개 일치${bonudNumberText} (${reward}) - ${count}개`;
  },
});

export const MESSAGE = Object.freeze({
  moneyInput: '구입금액을 입력해 주세요.\n',
  bonusNumberInput: '\n보너스 번호를 입력해 주세요.\n',
  winningNumbersInput: '\n당첨 번호를 입력해 주세요.\n',
  titleForResults: '\n당첨 통계\n---',
});

export const ERROR_MESSAGE = Object.freeze({
  wrongLottoNumberCount: '[ERROR] 로또 번호는 6개여야 합니다.\n',
  wrongNumberInput: '[ERROR] 숫자만 입력할 수 있습니다.\n',
  wrongMoneyRangeInput:
    '[ERROR] 로또 구입 금액은 최소 1000원 이상, 최대 9조 원까지 가능합니다.\n',
  wrongMoneyInput:
    '[ERROR] 로또는 개당 1000원이므로, 1000으로 나누어떨어지는 금액을 입력하셔야 합니다.\n',
  wrongLottoNumberInput:
    '[ERROR] 당첨 번호는 각각 1 ~ 45 사이이며, 중복되지 않는 6개의 수여야 합니다.\n',
  wrongBonusNumberInput:
    '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 하나의 수여야 합니다.\n',
});