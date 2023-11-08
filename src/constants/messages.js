const NOTICE_MESSAGES = {
  inputMoney: '구입금액을 입력해 주세요.\n',
  purchaseCount: '개를 구매했습니다.\n',
  inputLuckyNumbers: '당첨 번호를 입력해 주세요.\n',
  inputBonusNumber: '보너스 번호를 입력해 주세요.\n',
  resultPrint: '당첨 통계',
  dashes: '---',
  matchingNumbers: (matchingCount, prizeAmount, totalCount) =>
    `${matchingCount}개 일치 (${prizeAmount}원) - ${totalCount}개`,
};

const INIT = {
  priceUnit: 1000,
  validNumber: {
    min: 1,
    max: 45,
    count: 6,
  },
  reward: {
    threeCurrect: 5000,
    fourCurrect: 50000,
    fiveCurrect: 1500000,
    fiveBonusCurrect: 3000000,
    sixCurrect: 20000000,
  },
};

const ERROR_MESSAGES = {
  error: '[ERROR]',
  isNumeric: '양의 정수로 입력해 주세요',
  priceUnit: '1000단위로 입력해주세요',
  invalidNumber: '유효한 숫자가 아닙니다.',
  nonDuplicateNumber: '중복된 숫자가 있습니다.',
  nonOverlappingNumbers: '당첨번호와 보너스 번호는 겹칠 수 없습니다.',
  lengthError: length => `${length}자리의 숫자를 입력해주세요.`,
};

const REGEX = {
  isNumber: /^[0-9]+$/,
};

export { NOTICE_MESSAGES, INIT, ERROR_MESSAGES, REGEX };
