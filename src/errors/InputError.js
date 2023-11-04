class InputError {
  static checkEmptyInputError(input) {
    if (input.trim() === "") {
      throw new Error("[ERROR] 입력값이 비어 있습니다.");
    }
  }

  static checkAmountInputError(input) {
    if (input % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.");
    }
  }
}

export default InputError;
