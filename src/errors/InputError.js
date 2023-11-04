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

  static checkNumberError(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 입력되었습니다.");
    }
  }

  static checkNagativeNumberError(input) {
    if (input <= 0) {
      throw new Error("[ERROR] 유효한 범위의 값을 입력해 주세요.");
    }
  }
}

export default InputError;
