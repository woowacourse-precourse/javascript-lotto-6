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
});

export const LOTTO_NUMBER = Object.freeze({
  START_RANGE: 1,
  END_RANGE: 45,
  NUMBERS_TO_PICK: 6,
});
