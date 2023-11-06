import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./libs/message.js";
import {
  isDivisibleByThousand,
  isInputEmpty,
  isInputNumeric,
} from "./libs/validate.js";

class User {
  constructor() {
    this.money = null;
    this.lottoArr = [];
  }

  async buyLotto() {
    let input = null;
    while (input === null) {
      input = await this.#getInput();
    }
    this.money = input;
  }

  async #getInput() {
    try {
      const input = await Console.readLineAsync(MESSAGES.INPUT_LOTTO_PURCHASE);
      this.#validate(input);
      return Number(input);
    } catch (error) {
      Console.print(error.message);
      return null;
    }
  }

  #validate(input) {
    isInputEmpty(input);
    isInputNumeric(input);
    isDivisibleByThousand(input);
  }
}

export default User;
