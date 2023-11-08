class Validator {
  static validatePurchaseAmount(inputNumber) {
    if (isNaN(inputNumber)) throw new Error("[ERROR]");

    if (inputNumber % 1000 !== 0)
      throw new Error("[ERROR] 1,000원 단위의 구입금액만 입력 가능합니다.");
  }
  static validateLottoNumbers(inputArr) {
    if (inputArr.length !== 6) {
      throw new Error("[ERROR] 6개의 숫자를 입력해야 합니다.");
    }
    for (const number of inputArr) {
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자만 입력 가능합니다.");
      }
      if (!Validator.#validateNumberRange(number)) {
        throw new Error("[ERROR] 1~45 범위의 숫자만 입력 가능합니다.");
      }
    }
    if (!Validator.#validateLottoDuplication(inputArr, 6)) {
      throw new Error("[ERROR] 중복되지 않는 6개의 숫자만 입력 가능합니다.");
    }
  }

  static validateBonusNumber(number, lottoNumbers) {
    if (isNaN(number)) {
      throw new Error("[ERROR]");
    }
    if (!Validator.#validateNumberRange(number)) {
      throw new Error("[ERROR] 1~45 범위의 숫자만 입력 가능합니다.");
    }
    if (!Validator.#validateLottoDuplication([number, ...lottoNumbers], 7)) {
      throw new Error(
        "[ERROR] 당첨 번호와 중복되지 않는 숫자만 입력 가능합니다."
      );
    }
  }

  static #validateNumberRange(number) {
    if (number < 1 || number > 45) {
      return false;
    }
    return true;
  }

  static #validateLottoDuplication(numbers, length) {
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== length) {
      return false;
    }
    return true;
  }
}

export default Validator;
