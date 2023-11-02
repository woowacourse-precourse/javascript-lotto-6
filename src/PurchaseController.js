import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_PRICE } from "./constants.js";

class PurchaseController {
  static async getPrice() {
    const price = await MissionUtils.Console.readLineAsync("");

    return price;
  }

  static checkOnlyNumbers(price) {
    const pattern = /^\d+$/;

    return pattern.test(price);
  }

  static checkPriceDivisible(price) {
    const remainder = price % LOTTO_PRICE;

    return remainder === 0;
  }
}

export default PurchaseController;
