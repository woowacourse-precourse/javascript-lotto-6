import { MIN_NUMBER, MAX_NUMBER } from "../utils/constants.js";
import {
  TYPE_ERROR,
  RANGE_ERROR,
  DUPLICATE_WINNING_NUMBER_ERROR,
} from "../utils/errorMessage.js";
import { BONUS_NUMBER_INPUT_REQUEST } from "../utils/message.js";
import { print } from "../utils/print.js";
import { Console } from "@woowacourse/mission-utils";

class BonusNumber {
  #printMessage() {
    print(`\n${BONUS_NUMBER_INPUT_REQUEST}`);
  }

  #validateIsNumber(input) {
    if (isNaN(+input)) {
      throw new Error(TYPE_ERROR);
    }
  }

  #validateRange(input) {
    if (input < MIN_NUMBER || input > MAX_NUMBER) {
      throw new Error(RANGE_ERROR);
    }
  }

  #validateDuplicate(input, winning_number) {
    if (winning_number.includes(input)) {
      throw new Error(DUPLICATE_WINNING_NUMBER_ERROR);
    }
  }

  validate(input, winning_number) {
    this.#validateIsNumber(input);
    this.#validateRange(input);
    this.#validateDuplicate(input, winning_number);
  }

  async #getValidBonusNumber(winning_number) {
    while (true) {
      try {
        const input = await Console.readLineAsync("");
        this.validate(input, winning_number);
        return input;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getBonusNumber(winning_number) {
    this.#printMessage();
    const bonus_number = await this.#getValidBonusNumber(winning_number);
    return bonus_number;
  }
}

export default BonusNumber;
