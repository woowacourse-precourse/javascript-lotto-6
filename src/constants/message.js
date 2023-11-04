const MESSAGE = {
  input: {
    purchasePrice: '구입금액을 입력해 주세요.\n',
  },
  output: {
    numberOfLotto: '개를 구매했습니다.\n',
  },
  error: {
    priceUnit: '[ERROR] 1,000원 단위의 숫자를 입력해주세요.',
    numericPrice: '[ERROR] 숫자만 입력해주세요(1,000원 단위).',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE);

export default MESSAGE;
