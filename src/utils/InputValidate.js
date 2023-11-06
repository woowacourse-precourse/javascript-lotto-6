import InputError from "../errors/InputError.js";

class InputValidate {
  static validateAmount(inputNumber) {
    InputError.checkEmpty(inputNumber);
    InputError.checkNonNumeric(inputNumber);

    const parsedInput = parseInt(inputNumber, 10);

    InputError.checkNagativeNumber(parsedInput);
    InputError.checkInvalidAmount(parsedInput);

    return parsedInput;
  }

  static validateEmptyLottoNumbers(inputNumberList) {
    InputError.checkEmpty(inputNumberList);
  }

  static validateBonusNumber(inputNumber) {
    InputError.checkEmpty(inputNumber);
    InputError.checkNonNumeric(inputNumber);

    const parsedInput = parseInt(inputNumber, 10);

    InputError.checkNagativeNumber(parsedInput);
    InputError.checkOutOfRangeNumber(parsedInput);

    return parsedInput;
  }
}

export default InputValidate;
