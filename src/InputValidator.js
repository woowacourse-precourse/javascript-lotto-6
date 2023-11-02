class InputValidator {
  #REGEX = {
    number: /^[0-9]+$/,
  };

  #ERROR_MESSAGE = {
    amount: "[ERROR] 구입 금액은 숫자만 가능합니다.",
    unit: "[ERROR] 금액은 1000원 단위로 입력 가능합니다.",
  };

  validateAmount(input) {
    if (!this.#REGEX.number.test(input)) {
      throw new Error(this.#ERROR_MESSAGE.amount);
    }
    if (input.slice(-3) !== "000") {
      throw new Error(this.#ERROR_MESSAGE.unit);
    }
  }
}

export default InputValidator;
