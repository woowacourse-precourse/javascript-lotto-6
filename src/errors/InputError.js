class InputError {
  static checkEmpty(input) {
    if (input.trim() === "") {
      throw new Error("[ERROR] 입력값이 비어 있습니다.");
    }
  }

  static checkInvalidAmount(input) {
    if (input % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.");
    }
  }

  static checkNonNumeric(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 입력되었습니다.");
    }
  }

  static checkNagativeNumber(input) {
    if (input <= 0) {
      throw new Error("[ERROR] 유효한 범위의 값을 입력해 주세요.");
    }
  }

  static checkOutOfRangeNumber(input) {
    if (input < 1 || input > 45) {
      throw new Error("[ERROR] 로또번호는 1~45까지의 값만 입력할 수 있습니다.");
    }
  }
}

export default InputError;
