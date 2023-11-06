import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/Messages.js";
import { isOnlyNumber, isInRangeNumber } from "./utils/Validation";
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
    try {
      const winningNumber = await Console.readLineAsync(
        MESSAGES.GET_WINNING_NUMBER
      );
      const [isVaild, message, result] = this.isVaildWinningNumber(
        winningNumber.split(",")
      );

      if (!isVaild) {
        Console.print(message);
        throw new Error(message);
      }

      return result;
    } catch (error) {
      this.getWinningNumber();
    }
  }

  isVaildWinningNumber(splitedNumber) {
    const winningNumber = splitedNumber.map((el) => Number(el));

    if (!isOnlyNumber(splitedNumber.join(""))) {
      return [false, MESSAGES.ERROR.PLEASE_ONLY_NUMBER, null];
    }
    if (splitedNumber.length !== LOTTO.LENGTH) {
      return [false, MESSAGES.ERROR.INVAILD_LOTTO_LENGTH, null];
    }
    if (!isInRangeNumber(winningNumber)) {
      return [false, MESSAGES.ERROR.INVAILD_LOTTO_NUMBER, null];
    }
    if (new Set(winningNumber).size !== winningNumber.length) {
      return [false, MESSAGES.ERROR.DUPLICATE_LOTTO_NUMBER, null];
    }

    return [true, "", winningNumber];
  }

  async getBonusNumber(winningNumber) {
    //
  }
}

export default UserInput;
