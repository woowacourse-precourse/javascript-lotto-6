export const INPUT_MESSAGE = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.',
  winningNumbers: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
});

export const OUTPUT_MESSAGE = Object.freeze({
  lottoTicketNumber: '개를 구매했습니다.',
  returnRate1: '총 수익률은',
  returnRate2: '입니다.',
  result: '\n당첨 통계\n---',
});

export const PRIZES_MESSAGE = Object.freeze({
  3: '3개 일치 (5000원)',
  4: '4개 일치 (50,000원)',
  5: '5개 일치 (1,500,000원)',
  6: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  7: '6개 일치 (2,000,000,000원)',
});

export const PRIZES = Object.freeze({
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 30000000,
  7: 200000000,
});

export const ERROR_MESSAGE = Object.freeze({
  isNotNumber: '[ERROR] 숫자를 입력해 주세요.',
  inValidMoneyAmount: '[ERROR] 구매금액은 1000원 단위로 입력해야 합니다.',
  negativeNumber: '[ERROR] 금액은 양수여야 합니다.',
  isNotNumberForArr: '[ERROR] 모든 수는 숫자여야 합니다.',
  isNotInRange: '[ERROR] 숫자는 1~45까지의 숫자여야 합니다.',
  isNotSixDigit: '[ERROR] 총 6개의 숫자를 입력해야 합니다.',
  numDuplicated: '[ERROR] 중복된 숫자가 있습니다.',
  isNotAnumber: '[ERROR] 한 개의 숫자를 입력해주세요.',
  bonusNumDuplicated: '[ERROR] 보너스 번호는 당첨 번호와 달라야 합니다.',
});

export const NUMBER = Object.freeze({
  purchaseMoneyDivisor: 1000,
  zero: 0,
  lotto: 6,
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
});

export const OTHERS = Object.freeze({
  number: 'number',
  emptyString: '',
  comma: ',',
  commaWithSpace: ', ',
  lineBreak: '\n',
  bonusNumber: 'bonus',
  dash: '-',
  numKorean: '개',
  percent: '%',
});
