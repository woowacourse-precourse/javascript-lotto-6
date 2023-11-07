const MIN = 1;
const MAX = 45;
const LOTTO_LENGTH = 6;
const UNIT = 1000;
const MATCH = [1, 2, 3, 4, 5];
const MATCH_MESSAGE = {
  1: '6개 일치 (2,000,000,000원)',
  2: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  3: '5개 일치 (1,500,000원)',
  4: '4개 일치 (50,000원)',
  5: '3개 일치 (5,000원)',
};
const MATCH_MONEY = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

const MESSAGE = {
  input: {
    amount: '구입금액을 입력해 주세요.\n',
    winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
    bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  },
  result: '\n당첨 통계\n---',
  error: {
    amount: '[ERROR] 금액이 잘못된 형식입니다.\n',
    winningNumbers: '[ERROR] 당첨 번호가 잘못된 형식입니다.\n',
    bonusNumber: '[ERROR] 보너스 번호가 잘못된 형식입니다.\n',
  },
};

export {
  MIN,
  MAX,
  UNIT,
  LOTTO_LENGTH,
  MATCH,
  MATCH_MESSAGE,
  MATCH_MONEY,
  MESSAGE,
};
