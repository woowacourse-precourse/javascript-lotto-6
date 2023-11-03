export const inputMessage = Object.freeze({
  requestPurchaseAmount: "구입금액을 입력해 주세요.\n",
});

export const outputMessage = Object.freeze({
  purchaseConfirmation: (lottoCount) => `\n${lottoCount}개를 구매했습니다.`,
});
