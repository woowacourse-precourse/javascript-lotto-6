const QUERY = Object.freeze({
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  WINNING_NUM: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUM: "보너스 번호를 입력해 주세요.\n",
});

const MESSAGE = Object.freeze({
  PURCHASE_NUM: "개를 구매했습니다.\n",
  RESULT: "당첨 통계\n---",
  THREE_MATCH: "3개 일치 (5,000원)",
  FOUR_MATCH: "4개 일치 (50,000원)",
  FIVE_MATCH: "5개 일치 (1,500,000원)",
  BONUS_MATCH: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  SIX_MATCH: "6개 일치 (2,000,000,000원)",
  TOTAL_PROFIT_RATE: "총 수익률은",
  PERCENT: "%입니다.",
});

const ERROR = "[ERROR] ";

const LOTTO_ERROR_MSG = Object.freeze({
  LENGTH_6NUM: `${ERROR}로또 번호는 6개여야 합니다.`,
  DUPLICATE_NUM: `${ERROR}로또 번호는 중복된 숫자는 불가합니다.`,
  NUM_RANGE_1TO45: `${ERROR}로또 번호의 숫자 범위는 1~45입니다.`,
  ONLY_NUM_AND_COMMA: `${ERROR}숫자와 쉼표(,)만 입력 가능합니다.`,
});

const PURCHASE_ERROR_MSG = Object.freeze({
  PURCHASE_AMOUNT: `${ERROR}구입 금액은 1,000원 단위로 입력하세요.`,
});

const PRIZE_MONEY = Object.freeze({
  FIRST: "2,000,000,000",
  SECOND: "30,000,000",
  THIRD: "1,500,000",
  FOURTH: "50,000",
  FIFTH: "5,000",
});

module.exports = {
  QUERY,
  MESSAGE,
  ERROR,
  LOTTO_ERROR_MSG,
  PURCHASE_ERROR_MSG,
  PRIZE_MONEY,
};
