import draw from "./modules/Draw";
import purchase from "./modules/Purchase";
import reward from "./modules/Reward";
import inputView from "./views/Input";
import outputView from "./views/Output";

class App {
  async play() {
    const purchaseAmount = await inputView.enterPurchaseAmount();
    const lottoCount = purchase.countMoney(purchaseAmount);
    const lottos = purchase.getLottos(lottoCount);
    const lottoNumbersArr = lottos.map((lotto) => lotto.getNumbers());
    outputView.printPurchasedLottos(lottoNumbersArr);

    const winningNumber = await inputView.enterWinningNumber();
    const bonusNumber = await inputView.enterBonusNumber();
    const matches = draw.getResult(lottoNumbersArr, winningNumber, bonusNumber);
    outputView.printWinningStatistics(matches);

    const winningAmount = reward.computeWinningAmount(matches);
    const totalReturn = reward.computeTotalReturn(
      winningAmount,
      purchaseAmount
    );
    outputView.printTotalReturn(totalReturn);
  }
}

export default App;
