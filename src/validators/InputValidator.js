import ValidatorUtil from './ValidatorUtil.js';

class InputValidator {
  static purchaseAmountValidator(input) {
    const inputToNumber = Number(input);

    ValidatorUtil.isNumberValidate(inputToNumber);
    ValidatorUtil.isPositiveNumberValidate(inputToNumber);
    ValidatorUtil.isMultiplesOf1000Validate(inputToNumber);

    return inputToNumber;
  }

  static lottoNumberValidator(input) {
    const inputToNumberArray = input.split(',').map((item) => Number(item));

    ValidatorUtil.lengthValidate(inputToNumberArray);
    inputToNumberArray.map((number) => {
      ValidatorUtil.isNumberValidate(number);
      ValidatorUtil.isNumberInRangeValidate(number);
    });

    return inputToNumberArray;
  }

  static bonusNumberValidator(input) {
    const inputToNumber = Number(input);

    ValidatorUtil.isNumberValidate(inputToNumber);
    ValidatorUtil.isNumberInRangeValidate(inputToNumber);

    return inputToNumber;
  }
}

export default InputValidator;
