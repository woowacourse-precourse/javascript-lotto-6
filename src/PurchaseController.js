import { MissionUtils } from "@woowacourse/mission-utils";

class PurchaseController {
  static async getPrice() {
    const price = await MissionUtils.Console.readLineAsync("");

    return price;
  }
}

export default PurchaseController;
