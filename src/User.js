import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/index.js";

export default class User {
  static createUser() {
    return new this();
  }

  async promptPurchaseAmount() {
    return await Console.readLineAsync(GAME_MESSAGE.purchaseAmount);
  }
}
