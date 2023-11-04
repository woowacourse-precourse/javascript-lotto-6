import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./utils/CONSTANT.js";

class App {
  #purchaseAmount;

  async inputPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmount,
    );
    this.purchaseAmount = input;
  }

  async play() {
    this.inputPurchaseAmount();
  }
}

export default App;
