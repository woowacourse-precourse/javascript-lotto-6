import { MissionUtils } from "@woowacourse/mission-utils";
import GameUtils from "./lotto/GameUtils.js";
import LottoGame from "./lotto/LottoGame.js";
import OutputUi from "./ui/OutputUi.js";
import InputUi from "./ui/inputUi.js";
import Validation from "./validation/Validation.js";
class LottoController {
  constructor() {
    this.lottoGame = null;
    this.inputUi = new InputUi();
    this.outputUi = new OutputUi();
    this.winningStatus = null;
  }

  async sellLotto() {
    const PURCHASE_AMOUNT = await this.inputUi.askpurchaseAmount();
    this.lottoGame = new LottoGame(PURCHASE_AMOUNT);
    const SORTED_LOTTO_NUMBERS = GameUtils.sortLottoNumbers(this.lottoGame.getLottoNumbers());
    this.outputUi.printPurchasedLottos(SORTED_LOTTO_NUMBERS);
  }

  async winningCalculation() {
    const WINNING_NUMBER = await this.inputUi.askWinningNumber();
    const BONUS_NUMBER = await this.inputUi.askBonusNumber();
    this.winningStatus = this.lottoGame.getWinningStatus(WINNING_NUMBER, BONUS_NUMBER);
  }

  async lottoResult() {
    this.outputUi.printWinnigStatus(this.winningStatus);
    this.outputUi.printRateOfReturn(this.lottoGame.calculateRateOfReturn(this.winningStatus));
  }
}
export default LottoController;
