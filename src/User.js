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
    const input = await Console.readLineAsync(MESSAGES.INPUT_LOTTO_PURCHASE);
    this.#validate(input);
    this.money = parseInt(input);
  }

  #validate(input) {
    isInputEmpty(input);
    isInputNumeric(input);
    isDivisibleByThousand(input);
  }
}

export default User;
