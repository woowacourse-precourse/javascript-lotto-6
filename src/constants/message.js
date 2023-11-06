export const INPUT_MESSAGE = Object.freeze({
  requestPurchaseAmount: "구입금액을 입력해 주세요.\n",
  requestWinnerNumber: "\n당첨 번호를 입력해 주세요.\n",
  requestBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  purchaseConfirmation: (lottoCount) => `\n${lottoCount}개를 구매했습니다.`,
});

export const ERORR_MESSAGE = Object.freeze({
  purchaseError: "[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.",

  lengthError: "[ERROR] 로또 번호는 6개여야 합니다.",
  duplicateError: "[ERROR] 로또 번호는 중복이 있으면 안됩니다.",
  formatError: "[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.",

  bonusNumberError: "[ERROR] 보너스 숫자가 잘못된 형식입니다.",
  bonusIncludesWinnerError:
    "[ERROR] 보너스 숫자가 당첨 번호에 포함되어 있습니다.",
  bonusFormatError: "[ERROR] 보너스 숫자가 1~45 사이의 숫자여야 합니다.",
});
