import PurchaseLottos from "./PurchaseLottos.js";
import { Console } from "@woowacourse/mission-utils";
import { USER_PROMPT } from "./utils/constants.js";

class App {
  #lottoAmounts;

  async play() {
    await this.getLottoAmount();
  }

  async getLottoAmount() {
    const purchaseLottos = new PurchaseLottos();
    this.#lottoAmounts = await purchaseLottos.getLottoAmount();

    Console.print(USER_PROMPT.SHOW_LOTTO_AMOUNT(this.#lottoAmounts));
  }
}

export default App;
