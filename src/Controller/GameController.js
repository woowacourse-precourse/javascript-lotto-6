import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Game from "../Model/Game.js";
import Lotto from "../Lotto.js";

import { LOTTO } from "../constants/constants.js";
import { generateLotto } from "../util/generateLotto.js";
import InputValidator from "../Validator/inputValidator.js";

class GameController {
  constructor() {
    this.lottos = [];
  }

  async init() {
    const money = await this.getMoney();
    this.buyLotto(money);

    const { luckyNumbers, bonusNumber } = await this.getLottoNumbers();
    const game = new Game(this.lottos, luckyNumbers, bonusNumber);
    const result = game.play();
    OutputView.printLottoResult(result, money);
  }

  // 2. 로또를 구매한다.
  buyLotto(money) {
    const lottoCnt = this.getLottocnt(money);
    // 2-1. 구매한 로또 수량을 출력한다.
    OutputView.printLottoCnt(lottoCnt);

    for (let i = 0; i < lottoCnt; i += 1) {
      const lotto = new Lotto(generateLotto());
      this.lottos.push(lotto);
    }

    OutputView.printNewLine();
  }

  getLottocnt(money) {
    const lottoCnt = Math.floor(money / LOTTO.price);
    return lottoCnt;
  }

  // 1. 로또 구입 금액을 입력 받는다.
  async getMoney() {
    const money = InputValidator.validateMoney(await InputView.getMoney());
    if (!money) {
      return this.getMoney();
    }

    return money;
  }

  // 3. 로또 번호를 입력 받는다.
  async getLottoNumbers() {
    const luckyNumbers = await this.getLuckyNumbers();
    const bonusNumber = await this.getBonusNumber(luckyNumbers);

    return { luckyNumbers, bonusNumber };
  }

  // 3-1. 당첨 번호를 입력 받는다.
  async getLuckyNumbers() {
    const luckyNumbers = InputValidator.validateLuckyNumbers(await InputView.getLuckyNumbers());
    if (!luckyNumbers) {
      return this.getLuckyNumbers();
    }
    return luckyNumbers;
  }

  // 3-2. 보너스 번호를 입력 받는다.
  async getBonusNumber(luckyNumbers) {
    const bonusNumber = InputValidator.validateBonusNumber(await InputView.getBonusNumber(), luckyNumbers);
    if (!bonusNumber) {
      return this.getBonusNumber(luckyNumbers);
    }
    return bonusNumber;
  }
}

export default GameController;