class Validation {
  static isValidPurchaseAmount(purchaseAmount) {
    if (
      typeof purchaseAmount !== "number" ||
      isNaN(purchaseAmount) ||
      purchaseAmount <= 0 ||
      purchaseAmount % 1000 !== 0
    ) {
      throw new Error();
    }
  }
  static isValidLottoNumber(lottoNumber) {
    if (lottoNumber.length !== 6) {
      throw new Error();
    }
    if (
      !lottoNumber.every(
        (number) => Number.isInteger(number) && number >= 1 && number <= 45
      )
    ) {
      throw new Error();
    }
    if (new Set(lottoNumber).size !== 6) {
      throw new Error();
    }
  }
  static isValidBonusNumber(winNumber, bonusNumber) {
    if (
      typeof bonusNumber !== "number" ||
      isNaN(bonusNumber) ||
      bonusNumber <= 0 ||
      !Number.isInteger(bonusNumber)
    ) {
      throw new Error();
    }
    if (winNumber.includes(bonusNumber)) {
      throw new Error();
    }
  }
}
export default Validation;
