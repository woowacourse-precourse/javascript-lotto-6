const InputValidator = {
  purchaseAmount(input) {
    if (!Number.isInteger(+input) || input.trim() === "") {
      throw new Error("[ERROR] 입력한 값이 숫자가 아닙니다.");
    }
    if (+input % 1000 !== 0) {
      throw new Error(
        "[ERROR] 구입 금액은 1000원 단위로 나누어 떨어져야 합니다."
      );
    }
  },
  winningNumber(input) {
    if (input.length !== 6) {
      throw new Error("[ERROR] 로또 번호가 6개의 숫자가 아닙니다.");
    }
    input.forEach((number) => {
      if (!Number.isInteger(+number) || number.trim() === "") {
        throw new Error("[ERROR] 입력한 값이 숫자가 아닙니다.");
      }
      if (+number < 1 || +number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  },
};

export default InputValidator;
