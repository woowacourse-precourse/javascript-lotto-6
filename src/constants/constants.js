const LOTTO = Object.freeze({
  min: 1,
  max: 45,
  count: 6,
  price: 1000,
});

const ERROR_MESSAGE = Object.freeze({
  number: '[ERROR] 숫자를 입력해주세요.',
  unit: `[ERROR] ${LOTTO.price.toLocaleString()}원 단위로 입력해주세요.`,
});

const INPUT_MESSAGE = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  purchaseCount: tickets => `\n${tickets.length}개를 구매했습니다.`,
  tickets: ticket => `[${ticket.join(', ')}]`,
});

export { LOTTO, INPUT_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE };
