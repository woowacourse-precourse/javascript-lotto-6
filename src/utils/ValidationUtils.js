class ValidationUtils {
  static validateIsNumber(input) {
    if (Number.isNaN(input)) {
      throw new Error("[ERROR] 숫자를 입력해 주세요");
    }
  }

  static validateNotNull(input) {
    if (!input) {
      throw new Error("[ERROR] 값을 입력해 주세요");
    }
  }

  static validateLength(input, length) {
    if (input.length !== length) {
      throw new Error(`[ERROR] ${length}자리의 값을 입력해 주세요`);
    }
  }

  static validateNotDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new Error("[ERROR] 중복되지 않은 값을 입력해 주세요");
    }
  }
}

export default ValidationUtils;
