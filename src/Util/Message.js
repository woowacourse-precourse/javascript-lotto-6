const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH: '[ERROR] 이름은 5자 이하만 가능합니다.',
  NAME_BLANK: '[ERROR] 이름은 공백이면 안됩니다.',
  GAMECOUNT_BLANK: '[ERROR] 공백을 입력하시면 안됩니다.',
  GAMECOUNT_NOTNUM: '[ERROR] 숫자가 잘못된 형식입니다.',
});

export { INPUT_MESSAGE, ERROR_MESSAGE };
