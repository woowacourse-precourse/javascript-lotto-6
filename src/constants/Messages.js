const NEW_LINE = '\n';

const INPUT_MESSAGE = {
  purchaseAmount: `구입금액을 입력해주세요.(로또 1장의 구매 가격은 1,000원입니다.)${NEW_LINE}`,
  winningNumbers: `당첨 번호를 입력해주세요.(입력 번호는 쉼표(,) 기준으로 구분)${NEW_LINE}`,
  bonusNumber: `보너스 번호를 입력해주세요.${NEW_LINE}`,
};

const OUTPUT_MESSAGE = {
  purchaseAmount: `개를 구매했습니다.`,
  winningStats: `당첨 통계${NEW_LINE}---`,
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE };
