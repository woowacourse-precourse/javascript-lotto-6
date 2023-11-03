const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  isBlank: '[ERROR] 구입금액은 공백을 넣으면 안 됩니다.',
  isChar: '[ERROR] 문자를 입력하시면 안됩니다.',
  isNotThousandDivide: '[ERROR] 1000원으로 나누어 떨어지지 않습니다.',
});

export { INPUT_MESSAGE, ERROR_MESSAGE };
