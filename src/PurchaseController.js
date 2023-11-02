import { MissionUtils } from "@woowacourse/mission-utils";

class PurchaseController {
  static async getPrice() {
    const price = await MissionUtils.Console.readLineAsync("");

    return price;
  }

  static checkOnlyNumbers(price) {
    const pattern = /^\d+$/;

    return pattern.test(price);
  }
}

export default PurchaseController;
