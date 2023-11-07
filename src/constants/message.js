import OPTION from './option.js';

const read = Object.freeze({
  readPurchaseAmount: '구입 금액을 입력해 주세요.\n',
});

const print = Object.freeze({
  printLottoCounts: '개를 구매했습니다.',
});

const error = Object.freeze({
  prefix: '[ERROR]',
  purchaseAmountMustBePositiveInteger: '구입 금액은 양의 정수여야 합니다.',
  purchaseAmountMustBeAmountUnit: `구입 금액은 ${OPTION.amountUnit}원 단위여야 합니다.`,
});

const MESSAGE = Object.freeze({ read, print, error });

export default MESSAGE;
