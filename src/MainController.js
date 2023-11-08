import PurchaseController from "./PurchaseController.js";
import PublishController from "./PublishController.js";
import ErrorView from "./ErrorView.js";
import PublishView from "./PublishView.js";
import DrawController from "./DrawController.js";
import WinningController from "./WinningController.js";
import WinningResultView from "./WinningResultView.js";
import LottoView from "./LottoView.js";

class MainController {
  #purchasePrice;
  #lottos;
  #winningNumbers;
  #bonusNumber;

  async start() {
    await this.#pay();
    this.#printPayResult();
    await this.#draw();
    this.#report();
  }

  async #pay() {
    let isSuccess = false;

    while(!isSuccess) {
      try {
        const purchasePrice = await PurchaseController.purchase();
        const lottos = PublishController.convertPriceToLottos(purchasePrice);
        this.#purchasePrice = purchasePrice;
        this.#lottos = lottos;
        isSuccess = true;
      } catch (error) {
        ErrorView.printErrorMessage(error.message);
        isSuccess = false;
      }
    }
  }

  #printPayResult() {
    PublishView.printLottoQuantity(this.#lottos.length);
    this.#lottos.forEach((lotto) => {
      LottoView.printLottoNumbers(lotto.getNumbers());
    });
  }

  async #drawWinningNumbers() {
    let isSuccess = false;

    while (!isSuccess) {
      try {
        const winningNumbers = await DrawController.getProcessedWinningNumbers();
        this.#winningNumbers = winningNumbers;
        isSuccess = true;
      } catch (error) {
        ErrorView.printErrorMessage(error.message);
        isSuccess = false;
      }
    }
  }

  async #drawBonusNumber() {
    let isSuccess = false;

    while(!isSuccess) {
      try {
        const bonusNumber = await DrawController.getProcessedBonusNumber(this.#winningNumbers);
        this.#bonusNumber = bonusNumber;
        isSuccess = true;
      } catch (error) {
        ErrorView.printErrorMessage(error.message);
        isSuccess = false;
      }
    }
  }

  async #draw() {
    await this.#drawWinningNumbers();
    await this.#drawBonusNumber();
  }

  #report() {
    const ranks = WinningController.countRanks({
      lottos: this.#lottos,
      winningNumbers: this.#winningNumbers,
      bonusNumber: this.#bonusNumber,
    });
    const prize = WinningController.calculatePrize(ranks);

    WinningResultView.printWinningStatistics({
      ranks,
      purchasePrice: this.#purchasePrice,
      prize
    });
  }
}

export default MainController;
