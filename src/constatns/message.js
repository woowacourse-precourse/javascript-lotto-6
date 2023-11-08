export const INPUT_MESSAGE = Object.freeze({
  AMOUNT: "구입금액을 입력해 주세요.\n",
  WIN_NUM: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUM: "\n보너스 번호를 입력해 주세요.\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  COUNT: "개를 구매했습니다.",
  WINNING_TITLE: "\n당첨 통계\n---",
  REVENUE_START: "\n총 수익률은 ",
  REVENUE_END: "%입니다."
});

export const RESULT = Object.freeze([
  "3개 일치 (5,000원) - ",
  "4개 일치 (50,000원) - ",
  "5개 일치 (1,500,000원) - ",
  "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  "6개 일치 (2,000,000,000원) - ",
]);

export const ERROR_MESSAGE = Object.freeze({
  AMOUNT: "[ERROR] 잘못된 금액입니다.\n",
  WINNING_NUM_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.\n",
  WINNING_NUM_DUPLICATE: "[ERROR] 서로 다른 6개의 숫자여야 합니다.\n",
  BONUS_NUM_COUNT: "[ERROR] 1개의 번호를 입력해주세요.\n",
  NUM_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.\n",
});