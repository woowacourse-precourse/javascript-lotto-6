import ValidatorUtil from './ValidatorUtil.js';

class InputValidator {
  static purchaseAmountValidator(input) {
    const inputToNum = Number(input);

    ValidatorUtil.isNumberValidate(inputToNum);
    ValidatorUtil.isPositiveNumberValidate(inputToNum);
    ValidatorUtil.isMultiplesOf1000Validate(inputToNum);

    return inputToNum;
  }

  static lottoNumberValidator(input) {
    const inputToNumArr = input.split(',').map((item) => Number(item));

    ValidatorUtil.lengthValidate(inputToNumArr);
    inputToNumArr.map((number) => {
      console.log(number);
      ValidatorUtil.isNumberValidate(number);
      ValidatorUtil.isNumberInRangeValidate(number);
    });

    return inputToNumArr;
  }

  static bonusNumberValidator(input) {
    const inputToNum = Number(input);

    ValidatorUtil.isNumberValidate(inputToNum);
    ValidatorUtil.isNumberInRangeValidate(inputToNum);

    return inputToNum;
  }
}

export default InputValidator;
