export const CONSTANT = Object.freeze({
  amountUnit: 1000,
});

export const RANDOM_NUMBER = Object.freeze({
  minNum: 1,
  maxNum: 45,
});

export const MESSAGE = Object.freeze({
  enterAmount: '구입금액을 입력해 주세요.\n',
  buyLotto: '개를 구매했습니다.\n',
  enterWinning: '당첨 번호를 입력해 주세요.\n',
  enterBonus: '보너스 번호를 입력해 주세요\n',
});

export const ERROR = Object.freeze({
  errorPrefix: '[ERROR]',
  isNotInAmountUnit: `입력된 금액이 ${CONSTANT.amountUnit}원 단위가 아닙니다.`,
  isNegative: '입력된 금액이 음수입니다. 금액은 양수여야 합니다.',
  isEmpty: '공백이 입력되었습니다. 6자리의 숫자를 입력해야합니다.',
  isNotANumber: '숫자가 아닌 값이 입력되었습니다. 번호는 숫자만 가능합니다.',
  isNotSix: '6개가 입력되지 않았습니다. 6개의 숫자를 입력해주세요.',
  isNotInRange: '입력된 숫자 중 1-45 범위가 아닌 숫자가 있습니다. 범위 안의 숫자를 입력해주세요',
});
