const MESSAGE = {
  inputMoney: "구입금액을 입력해 주세요.\n",
  inputWinningNumbers: "당첨 번호를 입력해 주세요.\n",
  inputBonusNumber: "보너스 번호를 입력해 주세요.\n",
  outputGetLottos: (number) => `${number}개를 구매했습니다.\n`,
  outputResult: "당첨 통계\n---\n",
  threeSame: (number) => `3개 일치 (5,000원) - ${number}개\n`,
  fourSame: (number) => `4개 일치 (50,000원) - ${number}개\n`,
  fiveSame: (number) => `5개 일치 (1,500,000원) - ${number}개\n`,
  fiveAndBonusSame : (number) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개\n`,
  sixSame : (number) => `6개 일치 (2,000,000,000원) - ${number}개\n`,
  outputResult: (number) => `총 수익률은 ${number}%입니다.\n`
};

const ERROR_MESSAGE = {
  notMultiplesOf1000: "[ERROR] 1000의 배수의 값을 입력해 주세요.",
  notNumber: "[ERROR] 숫자를 입력해 주세요.",
  notSixNumbers: "[ERROR] 6개의 숫자를 입력해 주세요.",
  notLottoNumbers: "[ERROR] 0 ~ 45 숫자를 입력해 주세요.",
  notUniqueNumbers: "[ERROR] 서로 다른 숫자를 입력해 주세요."
}

export { MESSAGE, ERROR_MESSAGE };