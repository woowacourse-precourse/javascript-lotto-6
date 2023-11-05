const MIN = 1;
const MAX = 45;
const LOTTO_LENGTH = 6;
const UNIT = 1000;
const MATCH = {
  rank1: { message: '6개 일치 (2,000,000,000원)', money: 2000000000 },
  rank2: {
    message: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    money: 30000000,
  },
  rank3: { message: '5개 일치 (1,500,000원)', money: 1500000 },
  rank4: { message: '4개 일치 (50,000원)', money: 50000 },
  rank5: { message: '3개 일치 (5,000원)', money: 5000 },
};
const INPUT_MESSAGE = {
  amount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};
const RESULT_MESSAGE = '\n당첨 통계\n---';
const ERROR_MESSAGE = {
  amount: '[ERROR] 금액이 잘못된 형식입니다.\n',
  winningNumbers: '[ERROR] 당첨 번호가 잘못된 형식입니다.\n',
  bonusNumber: '[ERROR] 보너스 번호가 잘못된 형식입니다.\n',
};
export {
  MIN,
  MAX,
  UNIT,
  LOTTO_LENGTH,
  MATCH,
  INPUT_MESSAGE,
  RESULT_MESSAGE,
  ERROR_MESSAGE,
};
