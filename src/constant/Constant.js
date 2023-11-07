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

export { MESSAGE_INPUT, MESSAGE_OUTPUT };
