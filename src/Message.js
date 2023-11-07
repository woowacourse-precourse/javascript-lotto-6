const MESSAGE = {
  money: "구입금액을 입력해 주세요.\n",
  winningNumbers: "\n당첨 번호를 입력해 주세요.\n",
  bonusNumber: "\n보너스 번호를 입력해 주세요.\n",
  numberOfLottos: (number) => `\n${number}개를 구매했습니다.`,
  result: "\n당첨 통계\n---",
  threeSame: (number) => `3개 일치 (5,000원) - ${number}개`,
  fourSame: (number) => `4개 일치 (50,000원) - ${number}개`,
  fiveSame: (number) => `5개 일치 (1,500,000원) - ${number}개`,
  fiveAndBonusSame : (number) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  sixSame : (number) => `6개 일치 (2,000,000,000원) - ${number}개`,
  earningRate: (number) => `총 수익률은 ${number}%입니다.`
};

const ERROR_MESSAGE = {
  notMultiplesOf1000: "[ERROR] 1000의 배수의 값을 입력해 주세요.",
  notNumber: "[ERROR] 숫자를 입력해 주세요.",
  notSixNumbers: "[ERROR] 6개의 숫자를 입력해 주세요.",
  notLottoNumbers: "[ERROR] 0 ~ 45 숫자를 입력해 주세요.",
  notUniqueNumbers: "[ERROR] 서로 다른 숫자를 입력해 주세요."
}

export { MESSAGE, ERROR_MESSAGE };