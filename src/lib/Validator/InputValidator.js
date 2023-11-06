import { ERROR_MESSAGE } from "../Constants.js";
import { ValidationError } from "../Error/ValidationError.js";

class InputValidator {
  static ticketMoney(ticketMoney) {
    InputValidator.#checkInputProvided(ticketMoney);
    InputValidator.#checkIsInteger(ticketMoney);
  }

  static winNumbers(winNumbers) {
    InputValidator.#checkInputProvided(winNumbers);
    winNumbers.split(",").forEach((e) => {
      InputValidator.#checkIsInteger(e);
    });
  }

  static bonusNumber(bonusNumber) {
    InputValidator.#checkInputProvided(bonusNumber);
    InputValidator.#checkIsInteger(bonusNumber);
  }

  static #checkInputProvided(input) {
    if (input === undefined) throw new Error(ERROR_MESSAGE.INPUT_NOT_PROVIDED);
  }

  static #checkIsInteger(input) {
    if (parseInt(input).toString() !== input) {
      throw new ValidationError(ERROR_MESSAGE.NOT_AN_INT);
    }
  }
}

export default InputValidator;
