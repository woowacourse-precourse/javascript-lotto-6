import AppError from "../constant/AppError.js";



class Validate {
  validateAmount(input) {
    if (!AppError.REGEX.number.test(input)) {
      throw new AppError(AppError.ERROR_MESSAGE.amount);
    }
    if (input.slice(-3) !== "000") {
      throw new AppError(AppError.ERROR_MESSAGE.unit);
    }
  }

  validateWinningNumbers(input) {
    const nums = input.split(",");
    if (nums.findIndex((num) => !AppError.REGEX.lottoNumber.test(num)) !== -1) {
      throw new AppError(
        AppError.ERROR_MESSAGE.anotherNumber
      );
    }
    if (nums.length !== 6) {
      throw new AppError(
        AppError.ERROR_MESSAGE.anotherLength
      );
    }
    if (new Set(nums).size < 6) {
      throw new AppError(
        AppError.ERROR_MESSAGE.duplication
      );
    }
  }

  validateBonusNumber(input, winningNumbers) {
    if (!AppError.REGEX.lottoNumber.test(input)) {
      throw new AppError(
        AppError.ERROR_MESSAGE.anotherNumber
      );
    }
    if (winningNumbers.includes(Number(input))) {
      throw new AppError(
        AppError.ERROR_MESSAGE.duplication
      );
    }
  }
}

export default InputValidator;
