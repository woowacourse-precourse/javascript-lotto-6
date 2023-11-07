import { Console } from "@woowacourse/mission-utils";
import purchaseService from "./services/purchaseService.js";
import publishService from "./services/publishService.js";
import inputs from "./domains/inputs.js";
import outputs from "./domains/outputs.js";
import validationUtils from "./utils/validationUtils.js";

class App {
  #price;
  #amount;
  #lottos;
  #winningNum;
  #bonusNum;

  async play() {
    await this.#executePurchaseLotto();
    this.#executePublishLotto();
    await this.#executeWinningNum();
    await this.#executeBonusNum();
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

  // 당첨 번호 입력
  async #executeWinningNum() {
    try {
      const winningNum = await inputs.inputWinningNum();
      this.#winningNum = validationUtils.inputWinningNumValidate(winningNum);
    } catch (error) {
      Console.print(error.message);
      return this.#executeWinningNum();
    }
  }

  // 보너스 번호 입력
  async #executeBonusNum() {
    try {
      const bonusNum = await inputs.inpustBonusNum();
      this.#bonusNum = validationUtils.inputBonusNumValidate(
        bonusNum,
        this.#winningNum
      );
    } catch (error) {
      Console.print(error.message);
      return this.#executeBonusNum();
    }
  }
}

export default App;
