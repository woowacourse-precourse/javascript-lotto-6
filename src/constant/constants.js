const CONSTANT = {
  PRIZE_VALUES: {
    3: 5000,
    4: 50000,
    5: 1500000,
    "5+1": 30000000,
    6: 2000000000,
  },

  RESULT_COUNT: {
    3: 0,
    4: 0,
    5: 0,
    "5+1": 0,
    6: 0,
  },

  PRIZE_MSG: {
    3: "3개 일치 (5,000원)",
    4: "4개 일치 (50,000원)",
    5: "5개 일치 (1,500,000원)",
    "5+1": "5개 일치, 보너스 볼 일치 (30,000,000원)",
    6: "6개 일치 (2,000,000,000원)",
  },

  WIN_LOG: {
    MSG: "\n당첨 통계",
    SLASH: "---",
  },

  UNIT: 1000,

  RATE: (prize, amount) => {
    const profit = prize - amount;
    const rate = (profit / amount) * 100;
    return (100 - Math.abs(rate)).toFixed(1);
  },

  ERR_LOG: {
    NAN_AMOUNT: "[ERROR] 구입 금액은 숫자여야 합니다.",
    WRONG_PRICE: "[ERROR] 올바른 금액을 입력하십시오.",
    WRONG_MEASURE: "[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.",
    NAN: "[ERROR] 당첨 번호는 숫자여야 합니다.",
    WRONG_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
    WIN_LENGTH: "[ERROR] 당첨 번호는 6개여야 합니다.",
    OUT_OF_RANGE: "[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.",
    WRONG_BONUS: "[ERROR] 보너스 번호가 올바르지 않습니다.",
    REPEATED_BONUS: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  },

  LOG: {
    PURCHASE: "구입금액을 입력해 주세요.",
    WIN_NUM: "당첨 번호를 입력해 주세요.",
    BONUS: "보너스 번호를 입력해 주세요.",
    TOTAL_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
    CNT: (resultCnt, match, prizeMsg) =>
      `(${prizeMsg}원) - ${resultCnt[match]}개`,
  },
};

export default CONSTANT;
