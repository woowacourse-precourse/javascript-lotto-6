const MESSAGE = Object.freeze({
  purchase: {
    amount: "구입 금액을 입력해주세요.\n",
    winningNumber: "\n당첨 번호를 입력해주세요.\n",
    bonusNumber: "보너스 번호를 입력해주세요.",
  },
  match: {
    three: (input) => `3개 일치 (5,000원) - ${input}개`,
    four: (input) => `4개 일치 (50,000원) - ${input}개`,
    five: (input) => `5개 일치 (1,500,000원) - ${input}개`,
    bonus: (input) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${input}개`,
    six: (input) => `6개 일치 (2,000,000,000원) - ${input}개`,
  },
  result: {
    Amount: (quantity) => `\n${quantity}개를 구매했습니다.`,
    title: "\n당첨 통계\n---",
    benefit: (input) => `총 수익률은 ${input}%입니다.`,
  },
});

const ERROR = Object.freeze({
  lotto: {
    length: "[ERROR] 로또 번호는 6개여야 합니다.",
    numberRange: "[ERROR] 로또 번호는 1부터 45사이의 자연수입니다.",
    numeric: "[ERROR] 로또 번호는 숫자여야 합니다.",
    duplicate: "[ERROR] 중복된 숫자입니다.",
  },
  bonus: {
    duplicate: "[ERROR] 보너스 번호가 당첨번호와 중복되었습니다.",
    numeric: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  },
  purchase: {
    amountUnit: "[ERROR] 구입 금액은 1000원 단위입니다.",
    numeric: "[ERROR] 숫자만 입력해주세요.",
    minimunAmount: "[ERROR] 로또는 1000원부터 구입할 수 있습니다.",
  },
});

export { MESSAGE, ERROR };
