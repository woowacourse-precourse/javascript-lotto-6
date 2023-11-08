export const GUIDE_MESSAGE = Object.freeze({
  insertMoney: "구입 금액을 입력해 주세요.\n",
  insertWinningNumbers: "당첨 번호를 입력해 주세요.\n",
  insertBonusNumber: "보너스 번호를 입력해 주세요.\n",
  totalTickets: "개를 구매했습니다.\n",
  winningStatistics: "당첨 통계",
  divider: "---",
  totalReturn: "총 수익률은 *%입니다.",
});

export const PURCHASE_AMOUNT_ERROR_MESSAGE = Object.freeze({
  wrongFormat:
    "[ERROR] 잘못된 입력입니다. 1,000원 단위로 입력해야합니다. 다시 입력해 주세요.",
  underThousand:
    "[ERROR] 잘못된 입력입니다. 1,000원 미만의 금액은 입력이 불가합니다. 다시 입력해 주세요.",
  notNumber:
    "[ERROR] 잘못된 입력입니다. 구입 금액은 숫자여야 합니다. 다시 입력해 주세요.",
});

export const LOTTO_NUMBERS_ERROR_MESSAGE = Object.freeze({
  notSixNumbers: "[ERROR] 로또 번호는 6개여야 합니다.",
  duplicatedNumber: "[ERROR] 로또 번호에 중복된 숫자가 있습니다."
});

export const WINNING_NUMBERS_ERROR_MESSAGE = Object.freeze({
  notNaturalNumber:
    "[ERROR] 잘못된 입력입니다. 0 이하의 값은 입력이 불가합니다. 다시 입력해 주세요.",
  wrongRange:
    "[ERROR] 잘못된 범위입니다. 로또 번호는 1부터 45까지 입력할 수 있습니다. 다시 입력해 주세요.",
  detectedLastComma:
    "[ERROR] 잘못된 입력입니다. 입력된 값 없이 콤마(,)를 입력할 수 없습니다. 다시 입력해 주세요.",
  wrongWinningNumber:
    "[ERROR] 잘못된 형식입니다. 숫자와 쉼표 외에는 입력할 수 없습니다. 다시 입력해 주세요.",
  wrongCount:
    "[ERROR] 잘못된 입력입니다. 로또 한 장의 숫자 개수는 6개 입니다. 다시 입력해 주세요.",
  emptyInput: "[ERROR] 입력된 값이 없습니다. 다시 입력해 주세요.",
});

export const BONUS_NUMBER_ERROR_MESSAGE = Object.freeze({
  wrongBonusNumber:
    "[ERROR] 잘못된 입력입니다. 보너스 숫자는 한 개만 입력할 수 있습니다. 다시 입력해 주세요.",
  notNaturalNumber:
    "[ERROR] 잘못된 입력입니다. 0 이하의 값은 입력이 불가합니다. 다시 입력해 주세요.",
  duplicatedNumber:
    "[ERROR] 잘못된 입력입니다. 당첨 번호에 포함된 숫자는 입력이 불가합니다. 다시 입력해 주세요.",
});

export const WINNING_RESULT_DETAILS = Object.freeze({
  FIRST: "6개 일치 (2,000,000,000원) - ",
  SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  THIRD: "5개 일치 (1,500,000원) - ",
  FOURTH: "4개 일치 (50,000원) - ",
  FIFTH: "3개 일치 (5,000원) - ",
});