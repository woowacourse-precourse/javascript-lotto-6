const InputValidator = {
  validatePurchaseAmount(input) {
    if (isNaN(input) || input.trim() === "") {
      throw new Error("[ERROR] 입력한 값이 숫자가 아닙니다.");
    }
    if (+input % 1000 !== 0) {
      throw new Error(
        "[ERROR] 구입 금액은 1000원 단위로 나누어 떨어져야 합니다."
      );
    }
  },
};

export default InputValidator;
