export const MESSAGES = Object.freeze({
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  PURCHASE_RESULT: (count) => `\n${count}개를 구매했습니다.`,
  WINNIG_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  WINNING_STATISTICS: "\n당첨 통계\n---",
  THREE_SAME: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOUR_SAME: (count) => `4개 일치 (50,000원) - ${count}개`,
  FIVE_SAME: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  BONUS_SAME: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  SIX_SAME: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  PROFIT_RATE: (value) => `총 수익률은 ${value}%입니다.`,
});

const ERROR_PREFIX = "[ERROR]";
export const ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER: `${ERROR_PREFIX} 숫자가 잘못된 형식입니다.`,
  INVALID_AMOUNT: `${ERROR_PREFIX} 구입 금액이 1,000원 단위가 아닙니다.`,
  INVALID_WINNING_NUMBER_RANGE: `${ERROR_PREFIX} 로또 번호는 1부터 45사이의 숫자여야 합니다`,
  DUPLICATED_WINNING_NUMBER: `${ERROR_PREFIX} 당첨 번호가 중복 되었습니다.`,
  INVALID_WINNING_NUMBER: `${ERROR_PREFIX} 당첨 번호 숫자가 잘못된 형식입니다.`,
  INVALID_BONUS_NUMBER: `${ERROR_PREFIX} 보너스 번호 숫자가 잘못된 형식입니다.`,
});
