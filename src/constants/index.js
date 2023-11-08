const MESSAGES = {};

const INPUT_QUERY_MESSAGES = {
  purchaseAmout: `구입금액을 입력해 주세요.\n`,
  winningLottery: `\n당첨 번호를 입력해 주세요.\n`,
  bonusNumber: `\n보너스 번호를 입력해 주세요.\n`,
};
const ERROR_MESSAGES = {
  incorrectUnit: '단위가 맞지 않습니다.',
  notANumber: '숫자가 아닙니다.',
  zero: '0은 유효한 금액이 아닙니다.',
};
const WINNING_PRICE = {
  threePoint: 5000,
  fourPoint: 50000,
  fivePoint: 1500000,
  fivePointAndBonus: 30000000,
  sixPoint: 2000000000,
};

export { MESSAGES, INPUT_QUERY_MESSAGES, ERROR_MESSAGES, WINNING_PRICE };
