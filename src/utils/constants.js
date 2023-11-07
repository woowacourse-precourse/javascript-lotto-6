export const LOTTO_GAME_RULE = Object.freeze({
  lottoAmout: 1000,
  lottoCount: 6,
  lottoNumber: [1, 45],
  prize: [5000, 50000, 1500000, 30000000, 2000000000],
});

export const ERRORS = Object.freeze({
  error: "[ERROR]",
  emptyInputError: "입력값이 비어 있습니다.",
  invalidAmountError: "구입금액은 1000원 단위로 입력해야 합니다.",
  nonNumericError: "숫자가 아닌 값이 입력되었습니다.",
  negativNumberError: "0 이하의 음수를 입력할 수 없습니다.",
  outOfRangeNumberError: "로또번호는 1~45까지의 값만 입력할 수 있습니다.",
  numberLengthError: "로또 번호는 6개여야 합니다.",
  duplicatedNumberError: "중복된 숫자가 입력되었습니다.",
});

export const COMMAND = Object.freeze({
  purchaseAmountMessage: "구입금액을 입력해 주세요.\n",
  lottoNumbersMessage: "당첨 번호를 입력해 주세요.\n",
  bonusNumberMessage: "보너스 번호를 입력해 주세요.\n",
  bonusNumberMessage: "보너스 번호를 입력해 주세요.\n",
  purchaseMessage: "개를 구매했습니다.",
});

export const LOTTO_RANK = Object.freeze({
  rankNames: ["fifth", "fourth", "third", "second", "first"],
  startMessage: "당첨 통계\n---",
  rankResultMessage: [
    "3개 일치 (5,000원)",
    "4개 일치 (50,000원)",
    "5개 일치 (1,500,000원)",
    "5개 일치, 보너스 볼 일치 (30,000,000원)",
    "6개 일치 (2,000,000,000원)",
  ],
});
