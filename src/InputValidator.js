import AppError, { ERROR_TYPE } from "./AppError.js";

const ROTTO_NUMBER_LENGTH = 6;

class InputValidator {
  #REGEX = {
    number: /^[0-9]+$/,
    lottoNumber: /^(?:[1-9]|[1-3][0-9]|4[0-5])$/,
  };

  #ERROR_MESSAGE = {
    amount: "구입 금액은 숫자만 가능합니다.",
    unit: "금액은 1000원 단위로 입력 가능합니다.",
    invalidLottoNumber: "로또 번호는 1 ~ 45 사이의 숫자여야 합니다.",
    invalidLottoLength: "로또는 6개의 숫자를 선택해야합니다.",
    duplication: "중복된 로또 번호가 존재합니다.",
  };

  validateAmount(input) {
    if (!this.#REGEX.number.test(input)) {
      throw new AppError(this.#ERROR_MESSAGE.amount, ERROR_TYPE.inputError);
    }
    if (input.slice(-3) !== "000") {
      throw new AppError(this.#ERROR_MESSAGE.unit, ERROR_TYPE.inputError);
    }
  }

  validateWinningNumbers(input) {
    const nums = input.split(",");
    if (nums.findIndex((num) => !this.#REGEX.lottoNumber.test(num)) !== -1) {
      throw new AppError(
        this.#ERROR_MESSAGE.invalidLottoNumber,
        ERROR_TYPE.inputError,
      );
    }
    if (nums.length !== ROTTO_NUMBER_LENGTH) {
      throw new AppError(
        this.#ERROR_MESSAGE.invalidLottoLength,
        ERROR_TYPE.inputError,
      );
    }
    if (new Set(nums).size < ROTTO_NUMBER_LENGTH) {
      throw new AppError(
        this.#ERROR_MESSAGE.duplication,
        ERROR_TYPE.inputError,
      );
    }
  }

  validateBonusNumber(input, winningNumbers) {
    if (!this.#REGEX.lottoNumber.test(input)) {
      throw new AppError(
        this.#ERROR_MESSAGE.invalidLottoNumber,
        ERROR_TYPE.inputError,
      );
    }
    if (winningNumbers.includes(Number(input))) {
      throw new AppError(
        this.#ERROR_MESSAGE.duplication,
        ERROR_TYPE.inputError,
      );
    }
  }
}

export default InputValidator;
