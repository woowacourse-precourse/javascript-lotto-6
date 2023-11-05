import { Console } from "@woowacourse/mission-utils";
import { validatePurchasePrice } from "./Util";

class App {
  async play() {
    this.enterPurchasePrice();
  }

  async enterPurchasePrice() {
    const userPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
    validatePurchasePrice(userPrice);
  }
}

export default App;
