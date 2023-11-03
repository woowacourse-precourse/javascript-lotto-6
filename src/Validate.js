import ERROR_MESSAGE from "./Errors.js";
class Validator {
  static #MONEY_UNIT = 1000;

  static validateMoneyUnit(inputMoney) {
    if (inputMoney % Validator.#MONEY_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.moneyUnit);
    }
  }

  static validateInputMoney(inputMoney) {
    if (inputMoney.includes(" ")) {
      throw new Error(ERROR_MESSAGE.moneyValue);
    }

    if (/[^0-9]$/.test(inputMoney)) {
      throw new Error(ERROR_MESSAGE.moneyValue);
    }
  }
}
export default Validator;
