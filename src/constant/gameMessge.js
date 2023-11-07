const MESSAGE = Object.freeze({
  purchase: {
    amount: "구입 금액을 입력해주세요.\n",
    winningNumber: "\n당첨 번호를 입력해주세요.\n",
    bonusNumber: "보너스 번호를 입력해주세요.",
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

const resultOrder = [3, 4, 5, "5bonus", 6];

const RESULT = Object.freeze({
  resultMessages: {
    3: "3개 일치",
    4: "4개 일치",
    5: "5개 일치",
    "5bonus": "5개 일치, 보너스 볼 일치",
    6: "6개 일치",
  },

  prizeMap: {
    3: 5000,
    4: 50000,
    5: 1500000,
    "5bonus": 30000000,
    6: 2000000000,
  },
});

export { MESSAGE, ERROR, resultOrder, RESULT };
