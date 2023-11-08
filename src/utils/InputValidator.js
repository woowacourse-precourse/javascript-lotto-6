import Validation from "./Validation.js";

class InputValidator {
  static validatePurchaseAmount(amount) {
    Validation.validateNumberEmpty(amount);
    Validation.validateIsNumber(amount);
    Validation.validateInputThousandWonUnit(amount);
  }

  static validateLottoWinningNumber(array) {
    Validation.validateArrayEmpty(array);
    Validation.validateArrayIsNumber(array);
    Validation.validateHasDuplicate(array);
    Validation.validateArrayOfRange(array);
    Validation.validateArrayLength(array);
  }

  static validateLottoBonusNumber(array, number) {
    Validation.validateNumberEmpty(number);
    Validation.validateIsNumber(number);
    Validation.validateNumberOfRange(number);
    Validation.validateHasDuplicateArrayAndNumber(array, number);
  }
}

export default InputValidator;
