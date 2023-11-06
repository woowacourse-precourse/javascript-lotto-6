import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/Messages.js";
import { isOnlyNumber } from "./utils/Validation";
import { LOTTO } from "./constants/Standard.js";

class UserInput {
  async getPrice() {
    try {
      const price = await Console.readLineAsync(MESSAGES.GET_PRICE);
      const [isVaild, message, result] = this.#isVaildPrice(price);

      if (!isVaild) {
        Console.print(message);
        throw new Error(message);
      }

      return result;
    } catch (error) {
      this.getPrice();
    }
  }

  #isVaildPrice(stringPrice) {
    const price = Number(stringPrice);
    if (
      !isOnlyNumber(stringPrice) ||
      stringPrice.length === 0 ||
      price % LOTTO.PRICE !== 0
    ) {
      return [false, MESSAGES.ERROR.INVALID_PRICE, null];
    }
    if (price > LOTTO.MAX_PRICE) {
      return [false, MESSAGES.ERROR.EXCEED_PRICE, null];
    }
    return [true, "", price];
  }

  async getWinningNumber() {
    //
  }

  async getBonusNumber(winningNumber) {
    //
  }
}

export default UserInput;
