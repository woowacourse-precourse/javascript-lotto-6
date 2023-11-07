class Validator {
  validatePurchaseAmount(inputNumber) {
    if (isNaN(inputNumber))
      throw new Error("[ERROR] 로또 구입금액은 숫자만 입력 가능합니다.");

    if (inputNumber % 1000 !== 0)
      throw new Error("[ERROR] 1,000원 단위의 구입금액만 입력 가능합니다.");
  }
}

export default Validator;
