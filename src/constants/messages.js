export const INPUT_MESSAGES = Object.freeze({
  purchase: '구입금액을 입력해 주세요.\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  lottosQuantity: quantity => `\n${quantity}개를 구매했습니다.`,
});

export const ERROR_MESSAGES = Object.freeze({
  prefix: '[ERROR]',
  invalidType: '숫자만 입력해주세요.',
  invalidAmount: '구입 금액은 1,000원 단위로 입력해주세요.',
  invalidNumberLength: '로또 번호는 6개여야 합니다.',
  invalidUnique: '로또 번호는 서로 다른 숫자여야 합니다.',
  invalidNumberRange: '로또 번호의 숫자 범위는 1~45까지입니다.',
});
