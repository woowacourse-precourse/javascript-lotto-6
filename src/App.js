import LottoInterface from "./LottoInterface/index.js";
import LottoManager from "./LottoManager/index.js";

class App {
  #lottoInterface;

  #lottoManager;

  constructor() {
    this.#lottoInterface = new LottoInterface();
    this.#lottoManager = new LottoManager();
  }

  async play() {
    await this.issueLottoes();

    await this.#generateWinningLotto();

    this.#drawLottoes();
  }

  async issueLottoes() {
    const amountToPurchase = await this.#lottoInterface.readAmountToPurchase();

    const lottoes = this.#lottoManager.issueLottoes(amountToPurchase);

    this.#lottoInterface.printPurchasedLottoes(lottoes);
  }

  async #generateWinningLotto() {
    const winningNumbers = await this.#lottoInterface.readWinningNumbers();
    const bonusNumber = await this.#lottoInterface.readBonusNumber();

    this.#lottoManager.generateWinningLotto(winningNumbers, bonusNumber);
  }

  #drawLottoes() {
    const resultOfDrawLotto = this.#lottoManager.drawLottoes();
    const rateOfReturn = this.#lottoManager.calculateRateOfReturn();

    this.#lottoInterface.printWinningStatistics(
      resultOfDrawLotto,
      rateOfReturn,
    );
  }
}

export default App;
