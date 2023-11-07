export const OUTPUT_MESSAGE = Object.freeze({
  buyLottoCount: (count) => `${count}개를 구매했습니다.`,
  lottoNumbers: (numbers) => `[${numbers.join(", ")}]`,
  newLine: "",
  lottoResultInfo: "당첨 통계\n---",
  lottoResults: (message, money, count) =>
    `${message} (${money}원) - ${count}개`,
  lottoReturns: (profitPercentage) => `총 수익률은 ${profitPercentage}%입니다.`,
});

export const INPUT_MESSAGE = Object.freeze({
  enterPurchaseAmount: "구입금액을 입력해 주세요.\n",
  enterWinningNumbers: "당첨 번호를 입력해 주세요.\n",
  enterBonusNumber: "보너스 번호를 입력해 주세요\n",
});

export const ERROR_MESSAGE = {};
