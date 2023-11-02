import { Console } from "@woowacourse/mission-utils";

import InputView from "../View/InputView.js";

class GameController {
  constructor() {
    this.InputView = new InputView();
  }

  async init() {
    // 1. 로또 구입 금액을 입력 받는다.
    const money = await this.InputView.getMoney();
    Console.print(money);
  }
}

export default GameController;