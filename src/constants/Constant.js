const MESSAGE_INPUT = Object.freeze({
  PRICE: "구입금액을 입력해 주세요.",
  WINNING_INPUT: "당첨 번호를 입력해 주세요.",
  BONUS_INPUT: "보너스 번호를 입력해 주세요.",
});

const MESSAGE_OUTPUT = (num) =>
  Object.freeze({
    WINNING_OUTPUT: "당첨 통계\n---",
    COUNT: `${num}개를 구매했습니다.`,
    WINNING_THREE: `3개 일치 (5,000원) - ${num}개`,
    WINNING_FOUR: `4개 일치 (50,000원) - ${num}개`,
    WINNING_FIVE: `5개 일치 (1,500,000원) - ${num}개`,
    WINNING_BONUS: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개`,
    WINNING_SIX: `6개 일치 (2,000,000,000원) - ${num}개`,
    RATE: `총 수익률은 ${num}%입니다.`,
  });

const PRIZE = Object.freeze({
  PRIZE_THREE: 5000,
  PRIZE_FOUR: 50000,
  PRIZE_FIVE: 1500000,
  PRIZE_BONUS: 30000000,
  PRIZE_SIX: 2000000000,
});

const ERROR_MESSAGE = Object.freeze({
  PRICE_UNIT: "[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.",
  PRICE_NUMBER: "[ERROR] 구입 금액은 숫자로 입력해주세요.",
  LOTTO_UNIT: "[ERROR] 로또 번호는 1 ~ 45 사이로 입력해 주세요.",
  LOTTO_INPUT: "[ERROR] 당첨 번호 입력 시 중복되지 않는 숫자로 입력해주세요.",
});

export { MESSAGE_INPUT, MESSAGE_OUTPUT, PRIZE, ERROR_MESSAGE };
