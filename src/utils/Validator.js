import Validate from './Validate';

class Validator {
  static amountValidator(purchaseAmount) {
    Validate.numberValidate(purchaseAmount);
    Validate.divisionValidate(purchaseAmount);
    Validate.quantityValidate(purchaseAmount);
  }

  static winningNumberValidator(winningNumbers) {
    winningNumbers.forEach((v) => {
      Validate.rangeValidate(v);
    });

    Validate.lengthValidate(winningNumbers);
    Validate.bonusValidate(winningNumbers);
    Validate.duplicateValidate(winningNumbers);
  }

  static bonusNumberValidator(bonusNumber) {
    Validate.rangeValidate(bonusNumber);
    Validate.numberValidate(bonusNumber);
  }

  static LottoValidator(lottoNumbers) {
    lottoNumbers.forEach((v) => {
      Validate.rangeValidate(v);
    });

    Validate.lengthValidate(lottoNumbers);
    Validate.duplicateValidate(lottoNumbers);
    Validate.numberValidate(lottoNumbers);
  }
}

export default Validator;
