import { Console, Random } from "@woowacourse/mission-utils";
import {INPUT, OUTPUT, OUTPUT_ERROR} from "./text.js";
import Lotto from "./Lotto.js";
class App {
  constructor() {
    this.purchase=0;
    this.lotto = [];
    this.winning_num = [];
  }
  async play() {
    await this.inputPurchaseAmount();
    await this.generateLottos();
    await this.inputWinningNum();
  }
  async inputPurchaseAmount() {
    const MONEY = await Console.readLineAsync(INPUT.input_money);
    if (MONEY % 1000 !== 0) {
      throw new Error(OUTPUT_ERROR.money_err);
    }
    this.purchase=MONEY/1000;
  }
  async generateLottos() {
    await this.printPurchaseLottoCount();
    for (let i =0; i < this.purchase; i++) {
      const LOTTO_NUMS = Random.pickUniqueNumbersInRange(1,45,6);
      this.lotto.push(LOTTO_NUMS);
      Console.print(LOTTO_NUMS);
    }
  }
  async printPurchaseLottoCount() {
    Console.print(`\n${this.purchase}${OUTPUT.lottos_cnt}`);
  }
  async inputWinningNum() {
    const USER_INPUT = (await Console.readLineAsync(`\n${INPUT.input_winning}\n`)).split(',');
    this.winning_num = USER_INPUT;
  }
}

export default App;
