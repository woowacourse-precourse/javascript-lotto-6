const MESSAGE = Object.freeze({
  input: {
    price: "구입금액을 입력해 주세요.\n",
  },
  output: {
    amount: "개를 구매했습니다.",
  },
  error: {
    notNumber: "[ERROR] 구입금액은 숫자로 입력해 주세요.",
    priceUnit: "[ERROR] 구입금액은 1000원 단위로 입력해 주세요.",
  },
});
export default MESSAGE;
