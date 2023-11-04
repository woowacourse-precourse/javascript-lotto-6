import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./libs/message.js";
import {
  isDivisibleByThousand,
  isInputEmpty,
  isInputNumeric,
} from "./libs/validate.js";

class User {
  constructor() {
    this.money = 0;
    this.lottoArr = [];
  }

  async buyLotto() {
    try {
      const input = await Console.readLineAsync(
        MESSAGES.LOTTO_PURCHASE_MESSAGE
      );
      this.#validate(input);
      this.money = parseInt(input);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  #validate(input) {
    isInputEmpty(input);
    isInputNumeric(input);
    isDivisibleByThousand(input);
  }
}

export default User;
