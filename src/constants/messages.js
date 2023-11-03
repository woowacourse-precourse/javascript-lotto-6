export const INPUT_MESSAGES = Object.freeze({
  purchase: '구입금액을 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  lottosQuantity: quantity => `\n${quantity}개를 구매했습니다.`,
});

export const ERROR_MESSAGES = Object.freeze({
  prefix: '[ERROR]',
  invalidAmount: '구입 금액은 1,000원 단위로 입력해주세요.',
});
