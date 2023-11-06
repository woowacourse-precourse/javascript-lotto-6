const errorMessage = Object.freeze({
  purchaseRangeError: () => {
    throw new Error("[ERROR]구매 금액은 0보다 큰 숫자여야 합니다.");
  },
  purchaseError: () => {
    throw new Error("[ERROR]구매 금액은 1,000원으로 나누어 떨어져야 합니다.");
  },
  lengthError: () => {
    throw new Error("[ERROR]로또 번호는 6개여야 합니다.");
  },
  typeError: () => {
    throw new Error("[ERROR]입력이 잘못된 형식입니다.");
  },
  numberRangeError: () => {
    throw new Error("[ERROR]로또 번호와 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  },
  duplicateError: () => {
    throw new Error("[ERROR]중복 숫자가 존재합니다.");
  },
});

export default errorMessage;
