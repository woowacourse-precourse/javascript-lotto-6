export const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN: 1,
  MAX: 45,
  LENGTH: 6,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  FIRST_PLACE: 1,
  SECOND_PLACE: 2,
  THIRD_PLACE: 3,
  FOURTH_PLACE: 4,
  FIFTH_PLACE: 5,
  FIRST_PLACE_PRIZE: 2000000000,
  SECOND_PLACE_PRIZE: 30000000,
  THIRD_PLACE_PRIZE: 1500000,
  FOURTH_PLACE_PRIZE: 50000,
  FIFTH_PLACE_PRIZE: 5000,
});

export const MESSAGE = Object.freeze({
  ENTER_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  ENTER_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  ENTER_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  WINNING_STATISTICS: "\n당첨 통계",
  UNDERLINE: "---",
  EA: "개",
  FIRST_PLACE: "6개 일치 (2,000,000,000원) - ",
  SECOND_PLACE: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  THIRD_PLACE: "5개 일치 (1,500,000원) - ",
  FOURTH_PLACE: "4개 일치 (50,000원) - ",
  FIFTH_PLACE: "3개 일치 (5,000원) - ",
  PURCHASE_QUANTITY: (quantity) => `\n${quantity}개를 구매했습니다.`,
  TOTAL_RETURN: (totalReturn) => `총 수익률은 ${totalReturn}%입니다`,
});

export const ERROR = "[ERROR]";

export const LOTTO_ERROR_MESSAGE = Object.freeze({
  LOTTO_LENGTH: `${ERROR} 로또 번호는 6개여야 합니다.`,
  LOTTO_RANGE: `${ERROR} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  LOTTO_DUPLICATION: `${ERROR} 로또 번호는 중복되지 않아야 합니다.`,
});

export const INPUT_ERROR_MESSAGE = Object.freeze({
  NON_NUMERIC: `${ERROR} 숫자가 잘못된 형식입니다.`,
  COST_UNIT: `${ERROR} 1,000원 단위로 입력해야 합니다.`,
  NON_ZERO_START_AMOUNT: `${ERROR} 0원으로 시작할 수 없습니다.`,
  NON_MINUS_AMOUNT: `${ERROR} 0원보다 커야합니다.`,
  NUMBER_AND_COMMA: `${ERROR} 숫자와 (,)만 입력해야 합니다.`,
  BONUS_NUMBER_DUPLICATION: `${ERROR} 보너스 번호는 당첨 번호와 다르게 입력해야 합니다.`,
});
