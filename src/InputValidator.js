const ROTTO_NUMBER_LENGTH = 6;

class InputValidator {
  #REGEX = {
    number: /^[0-9]+$/,
    lottoNumber: /^(?:[1-9]|[1-3][0-9]|4[0-5])$/,
  };

  #ERROR_MESSAGE = {
    amount: "[ERROR] 구입 금액은 숫자만 가능합니다.",
    unit: "[ERROR] 금액은 1000원 단위로 입력 가능합니다.",
    invalidLottoNumber: "[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.",
    invalidLottoLength: "[ERROR] 로또는 6개의 숫자를 선택해야합니다.",
  };

  validateAmount(input) {
    if (!this.#REGEX.number.test(input)) {
      throw new Error(this.#ERROR_MESSAGE.amount);
    }
    if (input.slice(-3) !== "000") {
      throw new Error(this.#ERROR_MESSAGE.unit);
    }
  }

  validateWinningNumbers(input) {
    const nums = input.split(",").map((v) => v.trim());
    if (nums.findIndex((num) => !this.#REGEX.lottoNumber.test(num)) !== -1) {
      throw new Error(this.#ERROR_MESSAGE.invalidLottoNumber);
    }
    if (nums.length !== ROTTO_NUMBER_LENGTH) {
      throw new Error(this.#ERROR_MESSAGE.invalidLottoLength);
    }
  }
}

export default InputValidator;
