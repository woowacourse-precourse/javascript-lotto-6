import NUMBERS from './numbers.js';

const MESSAGES = {
  purchaseAmount: `최대 ${NUMBERS.maxPerchaseAmount}원까지 ${NUMBERS.perchaseUnit}원 단위로 구입금액을 입력해주세요.\n`,
  errorHeader: '[ERROR]: ',
  nonThousandUnitMessage: ` ${NUMBERS.perchaseUnit}원 단위로 입력해주세요.`,
  inputLimitMessage: `${NUMBERS.maxPerchaseAmount}원이 넘지 않게 입력해주세요.`,
  emptyPurchaseAmountInput: '금액을 입력해주세요.',
  purchaseQuantity: '개를 구매했습니다.',
};

Object.freeze(MESSAGES);

export default MESSAGES;
