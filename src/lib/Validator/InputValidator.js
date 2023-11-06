import { ERROR_MESSAGE } from "../Constants.js";
import { ValidationError } from "../Error/ValidationError.js";

class InputValidator {
  static ticketMoney(response) {
    InputValidator.#checkInt(response);
  }

  static winNumbers(response) {
    response.split(",").forEach((e) => {
      InputValidator.#checkInt(e);
    });
  }

  static bonusNumber(response) {
    InputValidator.#checkInt(response);
  }

  static #checkInt(response) {
    if (parseInt(response).toString() !== response) {
      throw new ValidationError(ERROR_MESSAGE.NOT_AN_INT);
    }
  }
}

export default InputValidator;
