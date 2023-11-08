import { PRIZE, INITIAL } from "./constant/NUMBER.js";
import { Input } from "./Input.js";
import { Output } from "./Output.js";
import PurchasePrice from "./PurchasePrice.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";
import Game from "./Game.js";

class App {
  purchasePrice = INITIAL;
  lotto = [];
  bonusNumber = INITIAL;

  constructor() {
    this.game = new Game();
  }

  async play() {
    await this.getPurchasePrice();
    Output.showPurchaseSize(this.purchasePrice);

    const drawingLotto = await this.game.drawLotto(this.purchasePrice);
    Output.drawLotto(drawingLotto);
    Output.enter();

    await this.getLottoNumbers();
    await this.getBonusNumber();

    this.performGame(drawingLotto);
  }

  async getPurchasePrice() {
    try {
      this.purchasePrice = await Input.purchasePrice();
      Output.enter();
      return new PurchasePrice(this.purchasePrice);
    } catch (error) {
      Output.error(error);
      return this.getPurchasePrice();
    }
  }

  async getLottoNumbers() {
    try {
      this.lotto = await Input.lotto();
      Output.enter();
      return new Lotto(this.lotto);
    } catch (error) {
      Output.error(error);
      return this.getLottoNumbers();
    }
  }

  async getBonusNumber() {
    try {
      this.bonusNumber = await Input.bonusNumber();
      Output.enter();
      return new BonusNumber(this.bonusNumber, this.lotto);
    } catch (error) {
      Output.error(error);
      return this.getBonusNumber();
    }
  }

  performGame(drawingLotto) {
    const results = this.game.getLottoResults(
      this.lotto,
      drawingLotto,
      this.bonusNumber
    );

    const earningRate = this.game.getEarningRate(
      PRIZE,
      results,
      this.purchasePrice
    );

    Output.winningReport(results, earningRate);
  }
}

export default App;
