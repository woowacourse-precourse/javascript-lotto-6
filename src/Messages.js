export const LOTTO_MESSAGE = Object.freeze({
    ENTER_PURCHASE_PRICE_MESSAGE: "구입금액을 입력해 주세요.\n",
    LOTTO_CNT_MESSAGE: "개를 구매했습니다.",
    ENTER_WINNING_NUMBER_MESSAGE: "\n당첨 번호를 입력해 주세요.\n",
    ENTER_BONUS_NUMBER_MESSAGE: "\n보너스 번호를 입력해 주세요.\n",
    WINNING_RESULT: "\n당첨 통계\n---",
    TOTAL_REVENUE_MESSAGE: "총 수익률은",
    PERCENT_MESSAGE: "%입니다.",
  });
  
  export const ERROR_MESSAGE = Object.freeze({
    INVALID_LOTTO_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
    DUPLICATE_LOTTO_NUMBERS: "[ERROR] 중복된 숫자가 있습니다.",
    INVALID_LOTTO_NUMBER_RANGE: "[ERROR] 로또 번호는 1부터 45의 숫자만 사용하실 수 있습니다.",
    NOT_ONLY_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
    INVALID_PURCHASE_AMOUNT: "[ERROR] 구입금액은 반드시 1000원 단위이여야 합니다.",
    INVALID_BONUS_NUMBER_RANGE: "[ERROR] 보너스 번호는 1부터 45의 숫자만 사용하실 수 있습니다.",
  });

  export const PRIZE_ARR = Object.freeze({
    PRIZE_DESCRIPTIONS: [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)",
    ],
    PRIZE_MONEY_ARR: [
      5000, 50000, 1500000, 30000000, 2000000000
    ]
  });