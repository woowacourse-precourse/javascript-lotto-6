import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./libs/message.js";
import {
  isArrLengthSix,
  hasDuplicate,
  isNumberInRange,
  isInputEmpty,
  isInputNumeric,
  isInteger,
  isElementInArray,
} from "./libs/validate.js";

class LuckyNumbers {
  #winning;
  #bonus;

  async setWinningNumbers() {
    let input = null;
    while (input === null) {
      input = await this.#getWinningInput();
    }
    this.#winning = input.map(Number);
  }

  async #getWinningInput() {
    try {
      const input = await Console.readLineAsync(MESSAGES.INPUT_WINNING_NUMBERS);
      const inputArray = input.split(",").map((element) => element.trim());
      this.#validateWinning(inputArray);
      return inputArray;
    } catch (error) {
      Console.print(error.message);
      return null;
    }
  }

  #validateWinning(array) {
    isArrLengthSix(array);
    hasDuplicate(array);

    array.forEach((element) => {
      isInputEmpty(element);
      isInputNumeric(element);
      isInteger(element);
      isNumberInRange(element);
    });
  }

  async setBonusNumber() {
    let input = null;
    while (input === null) {
      input = await this.#getBonusInput();
    }
    this.#bonus = input;
  }

  async #getBonusInput() {
    try {
      const input = await Console.readLineAsync(MESSAGES.INPUT_BONNUS_NUMBER);
      this.#validateBonus(input);
      return Number(input);
    } catch (error) {
      Console.print(error.message);
      return null;
    }
  }

  #validateBonus(input) {
    isInputEmpty(input);
    isInputNumeric(input);
    isInteger(input);
    isNumberInRange(input);
    isElementInArray({ element: Number(input), array: this.#winning });
  }

  get winning() {
    return this.#winning;
  }

  get bonus() {
    return this.#bonus;
  }
}

export default LuckyNumbers;
