import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Game from "../Model/Game.js";
import Lotto from "../Lotto.js";

import { MONEY_UNIT } from "../constants/constants.js";
import { generateLotto } from "../util/generateLotto.js";

class GameController {
  constructor() {
    this.game = new Game();
  }

  async init() {
    // 1. 로또 구입 금액을 입력 받는다.
    const money = await InputView.getMoney();
    const lottoCnt = Math.floor(money / MONEY_UNIT);
    this.buyLotto(lottoCnt);

    // 3. 로또 번호를 입력 받는다.
    this.game.luckyNumbers = await InputView.getLuckyNumbers();
    this.game.bonusNumber = await InputView.getBonusNumber();
  }

  // 2. 로또를 구매한다.
  buyLotto(lottoCnt) {
    // 2-1. 구매한 로또 수량을 출력한다.
    OutputView.printLottoCnt(lottoCnt);

    for (let i = 0; i < lottoCnt; i += 1) {
      const lotto = new Lotto(generateLotto());
      this.game.lottos.push(lotto);
    }

    OutputView.printNewLine();
  }
}

export default GameController;