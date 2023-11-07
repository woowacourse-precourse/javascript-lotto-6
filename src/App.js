import { Console } from "@woowacourse/mission-utils";
import purchaseService from "./services/purchaseService.js";

class App {
  #price;

  async play() {
    await this.#executePurchaseLotto();
  }

  // 로또 구입
  async #executePurchaseLotto() {
    try {
      this.#price = await purchaseService();
    } catch (error) {
      Console.print(error.message);
      return this.#executePurchaseLotto();
    }
  }
}

export default App;
