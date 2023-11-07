const INPUT_MESSAGE = {
  amount: '구입금액을 입력해 주세요.\n',
};

const OUTPUT_MESSAGE = {
  purchase: (count) => `\n${count}개를 구매했습니다.`,
};

const ERROR_MESSAGE = {
  notNumber: '[ERROR] 숫자가 잘못된 형식입니다.',
  notDivide: '[ERROR] 금액 단위가 맞지 않습니다.',
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
