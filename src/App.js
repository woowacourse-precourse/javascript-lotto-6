import { Console } from "@woowacourse/mission-utils";
import purchaseService from "./services/purchaseService.js";
import publishService from "./services/publishService.js";
import outputs from "./domains/outputs.js";

class App {
  #price;
  #amount;
  #lottos;

  async play() {
    await this.#executePurchaseLotto();
    this.#executePublishLotto();
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

  // 로또 발행
  #executePublishLotto() {
    this.#amount = publishService.calculateAmount(this.#price);
    outputs.printAmountOfLotto(this.#amount);
    this.#lottos = publishService.publishLottos(this.#amount);
    outputs.printLottos(this.#lottos);
  }
}

export default App;
