const message = {
  ENTER_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  ENTER_WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  ENTER_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  YOU_BUY: "개를 구매했습니다.",
  WINNING_STATISTICS: "당첨 통계\n---",
  THREE_MATCHES: "3개 일치 (5,000원) - ",
  FOUR_MATCHES: "4개 일치 (50,000원) - ",
  FIVE_MATCHES: "5개 일치 (1,500,000원) - ",
  FIVE_AND_BOUNUS_MATCHES: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  SIX_MATCHES: "6개 일치 (2,000,000,000원) - ",
  TOTAL_RETURN: "총 수익률",
};

const ERROR = "[ERROR]";

const error = {
  IS_EMPTY: `${ERROR} 입력된 값이 없습니다.`,
  NOT_NUMBER: `${ERROR} 숫자로 입력해주세요.`,
  NOT_DIVEDED_BY_1000: `${ERROR} 로또는 1000원 단위로 구매할 수 있습니다.`,
  NUMBER_IS_NOT_SIX: `${ERROR} 로또 번호는 6개여야 합니다.`,
  NATURAL_NUMBER_IN_RANGE: `${ERROR} 로또 번호는 1부터 45 사이의 자연수여야 합니다.`,
  DUPLICATE: `${ERROR} 당첨 번호는 중복되지 않아야 합니다.`,
};

const lottoInfo = {
  PRICE: 1000,
  START_INCLUSIVE: 1,
  END_INCLUSIVE: 45,
  COUNT: 6,
};

const inputType = {
  PURCHASE: "purchase",
  LOTTO: "lotto",
};

// 5등부터 1등까지 당첨 금액
const rewards = [5000, 50000, 1500000, 30000000, 2000000000];

export { message, error, lottoInfo, inputType, rewards };
