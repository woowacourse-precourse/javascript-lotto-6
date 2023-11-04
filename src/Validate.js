import ERROR_MESSAGE from "./Errors.js";
class Validator {
  static #MONEY_UNIT = 1000;

  static validateMoneyUnit(inputMoney) {
    if (parseInt(inputMoney, 10) % Validator.#MONEY_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.moneyUnit);
    }
  }

  static validateInputMoney(inputMoney) {
    if (inputMoney.includes(" ")) {
      throw new Error(ERROR_MESSAGE.moneyValue);
    }

    if (/\D/.test(inputMoney)) {
      throw new Error(ERROR_MESSAGE.moneyValue);
    }
  }
}
export default Validator;
