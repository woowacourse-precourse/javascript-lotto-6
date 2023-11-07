import InputError from "../errors/InputError.js";

class InputValidate {
  static validateInput(input, isBonusNumber = false) {
    InputError.checkEmpty(input);
    InputError.checkNonNumeric(input);

    const parsedInput = parseInt(input, 10);

    InputError.checkNagativeNumber(parsedInput);
    isBonusNumber
      ? InputError.checkOutOfRangeNumber(parsedInput)
      : InputError.checkInvalidAmount(parsedInput);

    return parsedInput;
  }

  static validateEmptyLottoNumbers(inputNumberList) {
    InputError.checkEmpty(inputNumberList);
  }

  static validateLottoNumbers(inputNumberList) {
    InputError.checkNumberLength(inputNumberList);
    InputError.checkDuplicateLength(inputNumberList);

    inputNumberList.forEach((number) => {
      InputError.checkNonNumeric(number);
      InputError.checkNagativeNumber(number);
      InputError.checkOutOfRangeNumber(number);
    });
  }

  static validateAmount(inputNumber) {
    return this.validateInput(inputNumber);
  }

  static validateBonusNumber(inputNumber) {
    return this.validateInput(inputNumber, true);
  }
}

export default InputValidate;
