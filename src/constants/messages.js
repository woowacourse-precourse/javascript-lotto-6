const MESSAGES = {
  COMMENT_ENTER_PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
  COMMENT_PURCHASE_AMOUNT: "개를 구매했습니다.",
  COMMENT_ENTER_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  COMMENT_ENTER_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  COMMENT_WINNING_STATS: [
    "3개 일치 (5,000원) - ",
    "4개 일치 (50,000원) - ",
    "5개 일치 (1,500,000원) - ",
    "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    "6개 일치 (2,000,000,000원) - ",
  ],
  COMMENT_PROFIT_PERCENTAGE_STATS: "당첨 통계\n---\n총 수익률은 ",
  ERROR_NO_INPUT: "[ERROR] 값을 입력해주세요.",
  ERROR_INPUT_PURCHASING_NUMBER:
    "[ERROR] 1,000 단위의 양의 정수를 입력해주세요.",
  ERROR_INPUT_WINNING_NUMBERS:
    "[ERROR] 1 이상, 45 이하의 자연수 6개를 입력해주세요.",
  ERROR_INPUT_WINNING_NUMBERS_WHITESPACE:
    "[ERROR] 당첨 번호는 ','와 숫자만 입력해주세요.",
  ERROR_INPUT_WINNING_NUMBERS_REPEATATION:
    "[ERROR] 당첨 번호에 중복되지 않은 값을 입력해주세요.",
  ERROR_INPUT_BONUS_NUMBERS:
    "[ERROR] 1 이상, 45 이하의 자연수 1개를 입력해주세요.",
  ERROR_INPUT_BONNUS_NUMBER_REPEATATION:
    "[ERROR] 당첨 번호와 중복되지 않은 값을 입력해주세요.",
};

export default MESSAGES;
