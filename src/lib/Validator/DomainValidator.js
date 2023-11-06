import { ERROR_MESSAGE, GAME_RULE } from "../Constants.js";
import { ValidationError } from "../Error/ValidationError.js";

class DomainValidator {
  static ticketMoney(money) {
    DomainValidator.#checkMoneyMod(money);
    DomainValidator.#checkMoneyRange(money);
  }

  static winNumbers(numbers) {
    DomainValidator.#checkLottoSize(numbers);
    DomainValidator.#checkUniqueConstraint(numbers);
    numbers.forEach((number) => {
      DomainValidator.#checkLottoRange(number);
    });
  }

  static bonusNumber(numbers, bonus) {
    DomainValidator.#checkUniqueConstraint([...numbers, bonus]);
    DomainValidator.#checkLottoRange(bonus);
  }

  static #checkMoneyMod(money) {
    if (money % GAME_RULE.TICKET_PRICE !== 0) {
      throw new ValidationError(ERROR_MESSAGE.INVALID_TICKET_MOD);
    }
  }

  static #checkMoneyRange(money) {
    if (
      money < GAME_RULE.MIN_TICKET_MONEY_INCLUSIVE ||
      GAME_RULE.MAX_TICKET_MONEY_INCLUSIVE < money
    ) {
      throw new ValidationError(ERROR_MESSAGE.INVALID_TICKET_RANGE);
    }
  }

  static #checkLottoSize(numbers) {
    if (numbers.length !== GAME_RULE.WIN_NUMBERS_SIZE) {
      throw new ValidationError(ERROR_MESSAGE.INVALID_WIN_NUMBER_SIZE);
    }
  }

  static #checkLottoRange(number) {
    if (
      number < GAME_RULE.MIN_WIN_NUMBER_INCLUSIVE ||
      GAME_RULE.MAX_WIN_NUMBER_INCLUSIVE < number
    ) {
      throw new ValidationError(ERROR_MESSAGE.INVALID_WIN_NUMBER_RANGE);
    }
  }

  static #checkUniqueConstraint(numbers) {
    const visited = new Set();
    numbers.forEach((number) => {
      if (visited.has(number)) {
        throw new ValidationError(ERROR_MESSAGE.UNIQUE_CONSTRAINT_VIOLATED);
      }
      visited.add(number);
    });
  }
}

export default DomainValidator;
