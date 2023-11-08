import { Console, Random } from "@woowacourse/mission-utils";
import {INPUT, OUTPUT_ERROR} from "./text.js";
import Lotto from "./Lotto.js";
class App {
  async play() {
    const PURCHASE_AMOUNT = this.inputPurchaseAmount();
    const LOTTOS = this.generateLottos(PURCHASE_AMOUNT);
    // console.log(PURCHASE_AMOUNT, LOTTOS);
  }
  async inputPurchaseAmount() {
    const MONEY = await Console.readLineAsync(INPUT.input_money);
    if (MONEY % 1000 !== 0) {
      throw new Error(OUTPUT_ERROR.money_err);
    }
    return MONEY / 1000;
  }
  generateLottos(PURCHASE_AMOUNT) {
    const LOTTOS = [];
    for (let i =0; i < PURCHASE_AMOUNT; i++) {
      const LOTTO_NUMS = Random.pickUniqueNumbersInRange(1,45,6);
      const LOTTO = new Lotto(LOTTO_NUMS);
      LOTTOS.push(LOTTO);
    }
    return LOTTOS;
  }
}

export default App;
