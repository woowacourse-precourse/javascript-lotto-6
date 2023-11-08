import { Console, Random } from "@woowacourse/mission-utils";
import {INPUT, OUTPUT, OUTPUT_ERROR} from "./text.js";
import Lotto from "./Lotto.js";
class App {
  constructor() {
    this.lotto = [];
  }
  async play() {
    const PURCHASE_AMOUNT = await this.inputPurchaseAmount();
    await this.generateLottos(PURCHASE_AMOUNT);
  }
  async inputPurchaseAmount() {
    const MONEY = await Console.readLineAsync(INPUT.input_money);
    if (MONEY % 1000 !== 0) {
      throw new Error(OUTPUT_ERROR.money_err);
    }
    return MONEY / 1000;
  }
  async generateLottos(PURCHASE_AMOUNT) {
    for (let i =0; i < PURCHASE_AMOUNT; i++) {
      const LOTTO_NUMS = Random.pickUniqueNumbersInRange(1,45,6);
      this.lotto.push(LOTTO_NUMS);
    }
    console.log(this.lotto)
  }

}

export default App;
