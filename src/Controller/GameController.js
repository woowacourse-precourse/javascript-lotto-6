import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Game from "../Model/Game.js";
import Lotto from "../Lotto.js";

import { MONEY_UNIT } from "../constants/constants.js";
import { generateLotto } from "../util/generateLotto.js";
import InputValidator from "../Validator/inputValidator.js";

class GameController {
  constructor() {
    this.game = new Game();
  }

  async init() {
    const money = await this.getMoney();
    this.buyLotto(money);

    // 3. 로또 번호를 입력 받는다.
    this.game.luckyNumbers = await this.getLuckynumbers();
    this.game.bonusNumber = await this.getBonumsNumber();
  }

  // 2. 로또를 구매한다.
  buyLotto(money) {
    const lottoCnt = this.getLottocnt(money);
    // 2-1. 구매한 로또 수량을 출력한다.
    OutputView.printLottoCnt(lottoCnt);

    for (let i = 0; i < lottoCnt; i += 1) {
      const lotto = new Lotto(generateLotto());
      this.game.lottos.push(lotto);
    }

    OutputView.printNewLine();
  }

  getLottocnt(money) {
    const lottoCnt = Math.floor(money / MONEY_UNIT);
    return lottoCnt;
  }

  // 1. 로또 구입 금액을 입력 받는다.
  async getMoney() {
    const money = InputValidator.validateMoney(await InputView.getMoney());
    return money;
  }

  // 3-1. 당첨 번호를 입력 받는다.
  async getLuckynumbers() {
    const luckyNumbers = InputValidator.validateLuckyNumbers(await InputView.getLuckyNumbers());
    return luckyNumbers;
  }

  // 3-2. 보너스 번호를 입력 받는다.
  async getBonumsNumber() {
    const bonusNumber = InputValidator.validateBonusNumber(await InputView.getBonusNumber());
    return bonusNumber;
  }
}

export default GameController;