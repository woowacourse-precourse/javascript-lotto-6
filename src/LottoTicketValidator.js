import { TICKET_CONFIGURATION } from "./Rule.js";

export class LottoTicketValidator {
  static #NUMBER_COUNT = TICKET_CONFIGURATION.quantity;
  static #START_RANGE = TICKET_CONFIGURATION.startRange;
  static #END_RANGE = TICKET_CONFIGURATION.endRange;

  static validateNumbers(numbers) {
    this.#validateNumberCount(numbers);
    this.#validateNumberUnique(numbers);
    for (let number of numbers) {
      this.validateNumber(number);
    }
  }

  static #validateNumberCount(numbers) {
    if (numbers.length !== this.#NUMBER_COUNT) {
      throw new Error(
        "[ERROR] 로또 번호는 " + this.#NUMBER_COUNT + "개여야 합니다."
      );
    }
  }

  static #validateNumberUnique(numbers) {
    if (new Set(numbers).size !== this.#NUMBER_COUNT) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  static validateNumber(number) {
    if (!this.#isValidLottoNumber(number)) {
      throw new Error(
        "[ERROR] 번호는 " +
          this.#START_RANGE +
          "부터 " +
          this.#END_RANGE +
          " 사이의 숫자여야 합니다."
      );
    }
  }

  static #isValidLottoNumber(number) {
    if (number < this.#START_RANGE || number > this.#END_RANGE) {
      return false;
    }
    return true;
  }
}
