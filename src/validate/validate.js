import AppError from "../constant/AppError.js";
import LOTTOERROR from "../constant/LottoError.js"


class Validate {

  validateAmount(input) {
    if (!LOTTERROR.regex.number.test(input)) { // 수정된 부분
      throw new AppError(LOTTOERROR.errormessage.amount);
    }
    if (input.slice(-3) !== "000") {
      throw new AppError(LOTTOERROR.errormessage.unit);
    }
  }


validateAmount(input) {
  if (!LOTTOERROR.regex.number.test(input)) { // 수정된 부분
    throw new AppError(LOTTOERROR.errormessage.amount);
  }
  if (input.slice(-3) !== "000") {
    throw new AppError(LOTTOERROR.errormessage.unit);
  }
}


  validateNumbers(input) {
    const nums = input.split(",");
    if (nums.findIndex((num) => !LOTTOERROR.regex.lottoNumber.test(num)) !== -1) {
      throw new AppError(
        LOTTOERROR.errormessage.anotherNumber
      );
    }
    if (nums.length !== 6) {
      throw new AppError(
        LOTTOERROR.errormessage.anotherLength
      );
    }
    if (new Set(nums).size < 6) {
      throw new AppError(
        LOTTOERROR.errormessage.duplication
      );
    }
  }

  validateBonusNumber(input, Number) {
    if (!LOTTOERROR.REGEX.lottoNumber.test(input)) {
      throw new AppError(
        LOTTOERROR.errormessage.anotherNumber
      );
    }
    if (Number.includes(Number(input))) {
      throw new AppError(
        LOTTOERROR.errormessage.duplication
      );
    }
  }
}

export default Validate;
