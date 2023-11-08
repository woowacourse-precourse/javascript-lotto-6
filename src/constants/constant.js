export const GAME_MESSAGE = {
  promptPurchaseAmount: "구입금액을 입력해 주세요.",
  printPurchasedLottoCount: "개를 구매했습니다.",
  promptWinnerLotto: "당첨 번호를 입력해 주세요.",
  promptBonusNum: "보너스 번호를 입력해 주세요.",
  winningLottoPrice: {
    three: ["3개 일치", 5000],
    four: ["4개 일치", 50000],
    five: ["5개 일치", 1500000],
    fiveNBonus: ["5개 일치, 보너스 볼 일치", 30000000],
    six: ["6개 일치", 2000000000],
  },
  totalReturn: ["총 수익률은", "입니다."],
};

export const ERROR_MESSAGE = {
  invalidAmountNotPositiveInt: "[ERROR] 구매 금액은 양의 정수여야 합니다.",
  invalidAmountNotDevideBy1000:
    "[ERROR] 구매 금액은 1,000원으로 나누어 떨어져야 합니다",
  invalidLottoCount: "[ERROR] 로또 번호는 6개여야 합니다.",
  invalidLottoDuplicate: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  invalidLottoRange: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  invalidBonusNumNotPositiveInt: "[ERROR] 보너스 번호는 양의 정수여야 합니다.",
  invalidBonusNumRange:
    "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
  invalidBonusNumDuplicate:
    "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
};
