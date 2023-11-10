import AppError from '../Contents/AppError.js';
import LOTTOERROR from '../Contents/LottoError.js';

class Validate {
  validateAmount(input) {
    if (!LOTTOERROR.regex.number.test(input)) {
      throw new AppError(LOTTOERROR.errormessage.amount);
    }
    if (input.slice(-3) !== "000") {
      throw new AppError(LOTTOERROR.errormessage.unit);
    }
  }

  validateNumbers(input) {
    const nums = input.split(",");
    if (nums.findIndex((num) => !LOTTOERROR.regex.lottoNumber.test(num)) !== -1) {
      throw new AppError(LOTTOERROR.errormessage.anotherNumber);
    }
    if (nums.length !== 6) {
      throw new AppError(LOTTOERROR.errormessage.anotherLength);
    }
    if (new Set(nums).size < 6) {
      throw new AppError(LOTTOERROR.errormessage.duplication);
    }
  }

  validateBonusNumber(input, Number) {
    if (!LOTTOERROR.regex.lottoNumber.test(input)) {
      throw new AppError(LOTTOERROR.errormessage.anotherNumber);
    }
    if (Number.includes(Number(input))) {
      throw new AppError(LOTTOERROR.errormessage.duplication);
    }
  }
}

export default Validate;
