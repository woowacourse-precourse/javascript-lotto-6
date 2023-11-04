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
      this.money = await Console.readLineAsync(MESSAGES.LOTTO_PURCHASE_MESSAGE);
      this.#validate();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  #validate() {
    isInputEmpty(this.money);
    isInputNumeric(this.money);
    isDivisibleByThousand(this.money);
  }
}

export default User;
