import InputView from "../view/InputView.js";
import { Console } from "@woowacourse/mission-utils";

export default class LottoController {
  constructor() {}

  async start() {
    await this.initializeMoney();
  }

  async initializeMoney() {
    const moneyInput = await InputView.moneyInput();
    Console.print(moneyInput);
  }

  static validate() {}
}
