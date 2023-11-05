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

  static checkLottoLength(input) {
    if (input.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개를 입력해야 합니다.");
    }
  }

  static checkDuplicateNumbers(input) {
    if (new Set(input).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 입력되었습니다.");
    }
  }

  static checkOutOfRangeNumbers(input) {
    if (input < 1 || input > 45) {
      throw new Error("[ERROR] 로또번호는 1~45까지의 값만 입력할 수 있습니다.");
    }
  }
}

export default InputError;
