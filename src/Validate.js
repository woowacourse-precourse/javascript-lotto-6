import ERROR_MESSAGE from "src/Errors.js";
class Validator {
  static #MONEY_UNIT = 1000;

  static validateMoneyUnit(inputMoney) {
    if (inputMoney % Validator.#MONEY_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.moneyUnit);
    }
  }
}
export default Validator;
