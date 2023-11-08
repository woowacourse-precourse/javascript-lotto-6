import { PRIZE } from "./constant/NUMBER.js";
import { Input } from "./Input.js";
import { Output } from "./Output.js";
import PurchasePrice from "./PurchasePrice.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";
import Game from "./Game.js";

class App {
  purchasePrice = 0;
  lotto = [];
  bonusNumber = 0;

  constructor() {
    this.game = new Game();
  }

  async getPurchasePrice() {
    try {
      this.purchasePrice = await Input.purchasePrice();
      Output.showEnter();
      return new PurchasePrice(this.purchasePrice);
    } catch (error) {
      Output.showError(error);
      return this.getPurchasePrice();
    }
  }

  async getLottoNumbers() {
    try {
      this.lotto = await Input.lotto();
      Output.showEnter();
      return new Lotto(this.lotto);
    } catch (error) {
      Output.showError(error);
      return this.getLottoNumbers();
    }
  }

  async getBonusNumber() {
    try {
      this.bonusNumber = await Input.bonusNumber();
      Output.showEnter();
      return new BonusNumber(this.bonusNumber);
    } catch (error) {
      Output.showError(error);
      return this.getBonusNumber();
    }
  }

  async play() {
    await this.getPurchasePrice();
    await Output.showPurchaseSize(this.purchasePrice);

    const drawingLotto = await this.game.drawLotto(this.purchasePrice);
    await Output.drawLotto(drawingLotto);
    await Output.showEnter();

    await this.getLottoNumbers();
    await this.getBonusNumber();

    this.performGame(drawingLotto);
  }

  async performGame(drawingLotto) {
    const matchingResults = this.game.calculateAllLottoMatches(
      this.lotto,
      drawingLotto,
      this.bonusNumber
    );

    const earningRate = this.game.getEarningRate(
      PRIZE,
      matchingResults,
      this.purchasePrice
    );

    await Output.winningReport(matchingResults, earningRate);
  }
}

export default App;
