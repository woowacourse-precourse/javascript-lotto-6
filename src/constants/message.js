const MESSAGE = Object.freeze({
  input: {
    price: "구입금액을 입력해 주세요.\n",
    winningNum: "당첨 번호를 입력해 주세요.\n",
    bonusNum: "\n보너스 번호를 입력해 주세요.\n",
  },
  output: {
    amount: "개를 구매했습니다.",
  },
  error: {
    notNumber: "[ERROR] 구입금액은 숫자로 입력해 주세요.",
    priceUnit: "[ERROR] 구입금액은 1000원 단위로 입력해 주세요.",
    notComma: "[ERROR] 당첨 번호는 쉼표(,)를 기준으로 구분하여 입력해 주세요.",
    notLength: "[ERROR] 당첨 번호는 6개의 숫자여야 합니다.",
    notRange: "[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.",
    repeatNum: "[ERROR] 당첨 번호는 중복되지 않는 숫자여야 합니다.",
    notBonusRange: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
    repeatBonusNum:
      "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 숫자여야 합니다.",
  },
});
export default MESSAGE;
