export const INPUT_MESSAGE = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.',
  winningNumbers: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
});

export const OUTPUT_MESSAGE = Object.freeze({
  lottoTicketNumber: '개를 구매했습니다.',
});

export const ERROR_MESSAGE = Object.freeze({
  isNotNumber: '[ERROR] 숫자를 입력해 주세요.',
  inValidMoneyAmount: '[ERROR] 구매금액은 1000원 단위로 입력해야 합니다.',
  negativeNumber: '[ERROR] 숫자는 양수여야 합니다.',
});

export const NUMBER = Object.freeze({
  purchaseMoneyDivisor: 1000,
  zero: 0,
  lotto: 6,
});

export const OTHERS = Object.freeze({
  number: 'number',
  emptyString: '',
  commaWithSpace: ', ',
});
