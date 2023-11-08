import Input from "./core/console/Input.js";
import Logger from "./core/console/Logger.js";
import { MONEY_UNIT } from "./core/const.js";
import LottoManager from "./core/managers/LottoManager.js";
import MoneyManager from "./core/managers/MoneyManager.js";

class App {
  /** @type {Input} */
  #input;
  /** @type {Logger} */
  #logger;
  /** @type {LottoManager} */
  #lottoManager;
  /** @type {MoneyManager} */
  #moneyManager;

  constructor() {
    this.#input = new Input();
    this.#logger = new Logger();
    this.#lottoManager = new LottoManager();
    this.#moneyManager = new MoneyManager();
  }

  async play() {
    const purchaseValue = await this.#input.askPurchaseValue();
    const lottos = this.#lottoManager.makeLottos(purchaseValue / MONEY_UNIT);

    this.#logger.printLottoNumbers(lottos);

    const winningNumbers = await this.#input.askWinningNumbers();
    const bonusNumber = await this.#input.askBounsNumber();

    const resultBoard = this.#lottoManager.makeResultBoard(
      winningNumbers,
      bonusNumber
    );

    this.#moneyManager.setPurchaseValue(purchaseValue);

    const returnAmount = this.#moneyManager.calculateTotalReturns(resultBoard);
    const returnRate = this.#moneyManager.calculateReturnRate(returnAmount);

    this.#logger.printWinningBoard(resultBoard, returnRate);
  }
}

export default App;
