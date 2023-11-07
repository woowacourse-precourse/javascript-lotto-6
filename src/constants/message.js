export const INPUT_MESSAGE = Object.freeze({
  lottoPurchaseAmount: "구입금액을 입력해 주세요.\n",
  lottoWinningNumbers: "\n당첨 번호를 입력해 주세요.\n",
  lottoBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  purchaseResult: "개를 구매했습니다.\n",
  matchResult: "당첨 통계\n",
  seperator: "---\n",
  fifthPlace: "3개 일치 (5,000원) - ",
  fourthPlace: "4개 일치 (50,000원) - ",
  thirdPlace: "5개 일치 (1,500,000원) - ",
  secondPlace: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  firstPlace: "6개 일치 (2,000,000,000원) - ",
  resultUnit: "개\n",
  returnRate: "총 수익률은 ",
  returnRatePostFix: "%입니다.",
});

export const ERROR_MESSAGE = Object.freeze({
  common: "[ERROR] ",
  noInput: "내용을 입력해 주세요.\n",
  invalidAmountUnit: "구입금액은 1,000원으로 나누어 떨어져야 합니다.\n",
  notNumber: "숫자를 입력해야 합니다.\n",
  invalidAmountRange: "구입금액은 1,000보다 큰 숫자여야 합니다.\n",
  invalidLottoNumberCount: "6자리 숫자를 입력하셔야 합니다.\n",
  duplicatedNumber: "중복된 숫자가 없어야 합니다.\n",
  invalidBonusNumberCount: "보너스 숫자는 하나의 숫자를 입력하셔야 합니다.\n",
  invalidNumberRange: "로또 번호는 1부터 45 사이의 숫자여야 합니다.\n",
  notInteger: "정수를 입력해야 합니다.\n",
});

export const MESSAGE_FACTOR = Object.freeze({
  seperator: ",",
  joinSeperator: ", ",
  blankSeperator: "",
  noInput: "",
  returnRate: "returnRate",
  newLine: "\n",
  openArray: "[",
  closeArray: "]",
});
