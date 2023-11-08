export const INPUT_MESSAGE = Object.freeze({
  money: "구입금액을 입력해주세요\n",
  lottoNumber: "당첨 번호를 입력해 주세요.\n",
  bonusNumber: "보너스 번호를 입력해주세요.\n",
});

export const ERROR_MESSAGE = Object.freeze({
  invalidMoneyError: "[ERROR] 숫자만 입력해주세요.",
  moneyFormatErrorMessage: "[ERROR] 1,000원 단위로 입력해 주세요.",
  duplicateLottoNumber: "[ERROR] 당첨 번호와 보너스 번호가 중복됩니다.",
});

export const OUTPUT_MESSAGE = Object.freeze({
  lottoCounts: (count) => `${count}개를 구매했습니다.`,
  result: "당첨 통계\n---",
});

export const LOTTO_NUMBER = Object.freeze({
  START_RANGE: 1,
  END_RANGE: 45,
  NUMBERS_TO_PICK: 6,
});

export const WINNING_MONEN_VALUE = Object.freeze({
  first: 2000000000,
  second: 30000000, // 보너스 볼이 일치할 경우의 당첨금
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
});

export const RANK = Object.freeze({
  first: 6,
  second: 5,
  third: 5,
  fourth: 4,
  fifth: 3,
});

export const PRIZE_INFO = Object.freeze({
  first: `${RANK.first}개 일치 (2,000,000,000원)`,
  second: `${RANK.second}개 일치, 보너스 볼 일치 (30,000,000원)`,
  third: `${RANK.third}개 일치 (1,500,000원)`,
  fourth: `${RANK.fourth}개 일치 (50,000원)`,
  fifth: `${RANK.fifth}개 일치 (5,000원)`,
});
