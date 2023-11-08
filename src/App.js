import PurchaseController from "./PurchaseController.js";
import PublishController from "./PublishController.js";
import ErrorView from "./ErrorView.js";
import PublishView from "./PublishView.js";
import LottoView from "./LottoView.js";
import DrawView from "./DrawView.js";
import DrawController from "./DrawController.js";
import WinningController from "./WinningController.js";
import WinningResultView from "./WinningResultView.js";

class App {
  async play() {
    let isPublished = false;
    let quantity = 0;
    let lottos = [];
    let winningNumbers = [];
    let bonusNumber = 0;
    let isWinningNumberFinished = false;
    let isBonusNumberFinished = false;
    let purchasePrice = 0;

    while(!isPublished) {
      purchasePrice = await PurchaseController.purchase();
      try {
        quantity = PublishController.calculateLottoQuantity(purchasePrice);
        lottos = PublishController.publish(quantity);
        isPublished = true;
      } catch (error) {
        ErrorView.printErrorMessage(error.message);
      }
    }

    PublishView.printLottoQuantity(quantity);
    lottos.forEach((lotto) => {
      LottoView.printLottoNumbers(lotto.getNumbers());
    });

    while(!isWinningNumberFinished) {
      DrawView.printWinningNumbersQuestion();
      const winningNumbersText = await DrawController.getWinningNumbers();
      try {
        winningNumbers = DrawController.processWinningNumbersText(winningNumbersText);
        isWinningNumberFinished = true;
      } catch (error) {
        ErrorView.printErrorMessage(error.message);
      }
    }

    while(!isBonusNumberFinished) {
      DrawView.printBonusNumberQuestion();
      const bonusNumberText = await DrawController.getBonusNumber();
      try {
        bonusNumber = DrawController.processBonusNumberText(bonusNumberText);
        DrawController.compareWinningBonus({ winningNumbers, bonusNumber });
        isBonusNumberFinished = true;
      } catch (error) {
        ErrorView.printErrorMessage(error.message);
      }
    }

    const ranks = WinningController.countRanks({ lottos, winningNumbers, bonusNumber });
    const prize = WinningController.calculatePrize(ranks);

    WinningResultView.printWinningStatistics({ ranks, purchasePrice, prize });
  }
}

export default App;
